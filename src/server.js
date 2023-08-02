// express 사용방법과 express를 이용한 app 생성 방법
// const express = require("express"); <= 옛날코드
// import express from "express"; <= 최신코드 (babel이 있으면 이걸로 써도 실행가능)

// const app = express();




 
import express from "express"; // node_modules에서 express를 찾는 것 거기에서 index.js를 찾아냄
import morgan from "morgan"; //middleware를 return 해주는 logger 함수

const PORT = 4000;
// 1. 익스프레스 에플리케이션(서버)을 만들어줌
const app = express();
const logger = morgan("dev");

// 3. 애플리케이션에게 get request에 어떻게 응답하는 방법 등등을 가르칠 것임
    // 누군가 홈 라우트로 겟 요청을 보낼 때의 응답
    // app.get("/",()=>console.log("Love ME"));
    //request를 받기는 했지만 그것에 대한 응답을 하지 않아서(콘솔만 찍음) 위 코드만 작성하면 브라우저에서 계속 동그라미가 돌아갈 것임.

    // request를 받으면 우리가 응답을 return 해야함.
    // res.end()는 응답을 끝내버리는 것임. request를 끝내는 것에는 여러방법이 있음.
    // res.send()는 글자 응답하고 끝내는 것


    const home = (req,res)=>{ 
        console.log("I will respond");
        return res.send("hello");
    }
    // app.use(logger);
    // app.get("/",home);
    
    // 어떨때는 이렇게 하고 어떨떄는 저렇게 하고.. 컨트롤러임. 
    const privateMiddleware = (req, res, next) => {
        const url = req.url;
        
        if(url === "/protected"){
            return res.send("<h1>Not Allowed</h1>")
        }
        console.log("allowed, u may continue")
        next();
    };
    

    const handleHome=(req,res)=>{
     
        return res.send("<h1>I lve middlewares </h1>");

    };

    const handleLogin=(req,res)=>{
        return res.send("Login here.");
    };

 
    // app.use는 어느 URL에도 작동하는 middleware
    app.use(privateMiddleware);
    // app.use(logger);
    app.get("/", handleHome);
    app.get("/login", handleLogin);

// URL Logger: 이 미들웨어는 방문 중인 URL을 기록(log) 해야 합니다.
// Time Logger: 이 미들웨어는 요청(request)의 년, 월, 일을 기록해야 합니다.
// Security Logger: 이 미들웨어는 프로토콜이 https이면 secure이라고 기록하고, 그 외의 경우 insecure라고 기록해야 합니다.
// Protector Middleware: 이 미들웨어는 사용자가 /protected로 이동하려고 할 경우 이동하지 못하도록 해야 합니다.
const URLLogger=(req,res,next)=>{
    if(req.protocol == "https"){
        return res.send("secure");
    }else {
        return res.send("insecure");
    }
    next();
 }

const ProtectorLogger=(req,res,next)=>{
    const url = req.url;
    const URLLogger=(req,res,next)=>{
    console.log(app.path);
}
    next();
}

const TimeLogger=(req,res,next)=>{
    const now = new Date();
    console.log(
      `Time: ${now.getFullYear()}.${now.getMonth() + 1}.${now.getDate()}`
    );
    next();
}

const SecurityLogger=(req,res,next)=>{
        if(url === "/protected"){
            return res.send("<h1>Not Allowed</h1>")
        }
    next();
}
app.use(URLLogger,TimeLogger,SecurityLogger,ProtectorLogger);
// 2. 외부접속을 listen
// eventlister와 동일하게 handler가 되는 함수가 있고 그 함수는 파라미터를 가지고 있음. 여기에서 파라미터는 request와 response 2개 (express가 뒤에서처리해줌)
const handleListening = (req, res) =>console.log(`✅Server listening on port https://localhost:${PORT}` );
app.listen(PORT,handleListening);



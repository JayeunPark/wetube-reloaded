// express 사용방법과 express를 이용한 app 생성 방법
// const express = require("express"); <= 옛날코드
// import express from "express"; <= 최신코드 (babel이 있으면 이걸로 써도 실행가능)

// const app = express();

import express from "express"; // node_modules에서 express를 찾는 것 거기에서 index.js를 찾아냄
import morgan from "morgan"; //middleware를 return 해주는 logger 함수
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const PORT = 4000;
// 1. 익스프레스 에플리케이션(서버)을 만들어줌
const app = express();
const logger = morgan("dev");
app.use(logger);

//라우터 만들기(각 폴더로 이전)
app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/videos",videoRouter);

// 3. 애플리케이션에게 get request에 어떻게 응답하는 방법 등등을 가르칠 것임
    // 누군가 홈 라우트로 겟 요청을 보낼 때의 응답
    // app.get("/",()=>console.log("Love ME"));
    //request를 받기는 했지만 그것에 대한 응답을 하지 않아서(콘솔만 찍음) 위 코드만 작성하면 브라우저에서 계속 동그라미가 돌아갈 것임.

    // request를 받으면 우리가 응답을 return 해야함.
    // res.end()는 응답을 끝내버리는 것임. request를 끝내는 것에는 여러방법이 있음.
    // res.send()는 글자 응답하고 끝내는 것


// 2. 외부접속을 listen
// eventlister와 동일하게 handler가 되는 함수가 있고 그 함수는 파라미터를 가지고 있음. 여기에서 파라미터는 request와 response 2개 (express가 뒤에서처리해줌)
const handleListening = (req, res) =>console.log(`✅Server listening on port https://localhost:${PORT}` );
app.listen(PORT,handleListening);



import express from "express";
import {login,join} from "../controllers/userController";
import {trending,search} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/",trending);
globalRouter.get("/join",join);
globalRouter.get("/login",login);
globalRouter.get("/search",search);

// 글로벌라우터를 export. 
// default 로 설정하면 import할 때 이름을 똑같이 유지하지 않아도됨 내맘대로가능
// 대신 파일 하나에 대해서만 가능함 
// 그냥 export를 하면 이름 바꾸기 불가능. 그리고 오브젝트를 열어서 임포트해야함
export default globalRouter;
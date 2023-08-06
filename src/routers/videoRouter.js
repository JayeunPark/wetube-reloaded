import express from "express";
import { see,edit,upload,deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload",upload);//express가 찾을 수 없음. id가 될 수도 있어서.
videoRouter.get("/:id(\\d+)",see);
videoRouter.get("/:id(\\d+)/edit",edit);
videoRouter.get("/:id(\\d+)/delete",deleteVideo);
export default videoRouter;
// /:은 url안에 변수를 포함할 수 있게 해준다
import express from "express";
import { see,edit, removeuser,logout} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout",logout);
userRouter.get("/edit",edit);
userRouter.get("/delete",removeuser);
userRouter.get("/:id",see);


export default userRouter;
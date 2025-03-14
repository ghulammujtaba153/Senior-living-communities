import express from "express";
import { getProfile, login, registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", registerUser);
userRouter.post("/signin", login);
userRouter.get("/profile/userId", getProfile);

export default userRouter;
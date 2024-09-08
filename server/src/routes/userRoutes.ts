import express, { Router } from "express";
import { getUser, userLogin, userSignup } from "../controllers/user.controllers";
import { authenticateUser } from "../middlewares/auth.middleware";

const userRouter = Router();

userRouter.post('/signup',userSignup);
userRouter.get('/login',userLogin);
userRouter.get('/getUser',authenticateUser,getUser);

export default userRouter;
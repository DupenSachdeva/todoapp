import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware";
import { createTag, createTodo, getTodos } from '../controllers/todo.controllers';

const todoRouter = express.Router();


todoRouter.post('/create',authenticateUser,createTodo);
todoRouter.get('/get',authenticateUser,getTodos);
todoRouter.post('/utio',authenticateUser,createTag);

export default todoRouter;
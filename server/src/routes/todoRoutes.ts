import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware";
import { createTodo, getTodos } from '../controllers/todo.controllers';

const todoRouter = express.Router();


todoRouter.post('/create',authenticateUser,createTodo);
todoRouter.get('/get',authenticateUser,getTodos);

export default todoRouter;
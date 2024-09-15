import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware";
import { completeTodo, createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todo.controllers/todo.controllers';
import { getTags, createTag } from '../controllers/todo.controllers/tag.controllers';
import { createList, getLists } from "../controllers/todo.controllers/list.controllers";

const todoRouter = express.Router();


todoRouter.post('/create',authenticateUser,createTodo);
todoRouter.get('/get',authenticateUser,getTodos);
todoRouter.put('/update',authenticateUser,updateTodo);
todoRouter.put('/complete',authenticateUser,completeTodo);
todoRouter.delete('/delete',authenticateUser,deleteTodo);

todoRouter.post('/create/tag',authenticateUser,createTag);
todoRouter.get('/get/tag',authenticateUser,getTags);

todoRouter.post('/create/list',authenticateUser,createList);
todoRouter.get('/get/list',authenticateUser,getLists);


export default todoRouter;
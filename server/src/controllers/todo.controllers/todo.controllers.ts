import { Request , Response } from "express";
import { customRequest } from "../../middlewares/auth.middleware";
import { user } from '../../models/user.model';
import { Isubtodo, subtodo, todoType } from '../../models/subtodo.model';
import { Types } from "mongoose";
import { todotag } from "../../models/todotags.model";

export const createTodo = async function createTodo(req:Request,res:Response){

    try {
        const todoObject = req.body.todo;
    
    let newTodo = new subtodo(todoObject);
    let id = (req as customRequest).userId;
    const finalId = new Types.ObjectId(id);
    newTodo.createdBy = finalId;
    await newTodo.save();

    const userInstance = await user.findById(id.id);
    userInstance?.todos.push(newTodo);
    await userInstance?.save();
    console.log(userInstance?.todos);
    
    
    return res.status(200).send(newTodo);

    } catch (error) {
        console.log(error);

          return res.status(400).send(error);
          
                  
    }
    
    
}

export const getTodos = async function getTodos(req:Request,res:Response){
    try {
        const id = (req as customRequest).userId.id;
        
        
        
    const userInstance = await  user.findById(id);
    
   if(!userInstance)
    return res.status(400).json({message:"user does not exist"});

   const userTodos = (await userInstance.populate('todos')).todos;

   let todoMap: {[key:string]:Isubtodo[]} = {};   
   todoMap = segregateTodos(userTodos);
      
   return res.status(200).json(todoMap);

    } 
    catch (error) {
        res.status(400).send(error);
        console.log(error);
        
    }
    
   
}

export const updateTodo = async function updateTodo(req:Request,res:Response){
    
    try {
        const todoId = req.headers.todoId;
    const todo = req.body.todo;

  
    
    let todoInstance = await subtodo.findById(todoId);

    if(!todoInstance)
        return res.status(200).send({message:"todo does not exist"});
    
    todoInstance.name = todo.name;
    todoInstance.description = todo.description;
    todoInstance.todotag = todo.tags;
    todoInstance.todoType = todo.todoType;
    todoInstance.dueDate = todo.dueDate;
    await todoInstance.save();

    return res.status(200).json(todoInstance);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        
    }
    

}

export const completeTodo = async function completeTodo(req:Request,res:Response){

    try {
        const todoId = req.headers.todoId;
    const todo = req.body.todo;

    
    let todoInstance = await subtodo.findById(todoId);

    if(!todoInstance)
        return res.status(200).send({message:"todo does not exist"});

    todoInstance.completed = true;
    await todoInstance.save();

    return res.status(200).send(todoInstance);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        
    }
    
}

export const deleteTodo = async function deleteTodo(req:Request,res:Response){

    try {
        const todoId = req.headers.todoId;
    const todo = req.body.todo;

    
    let todoInstance = await subtodo.findById(todoId);

    if(!todoInstance)
        return res.status(200).send({message:"todo does not exist"});

    todoInstance.deleteOne();
    todoInstance.save();
    

    return res.status(200).send(todoInstance);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        
    }
    
}
function segregateTodos(userTodos:Isubtodo[]){
    let myMap: {[key:string]:Isubtodo[]} = {};
    console.log(userTodos);
    
    userTodos.forEach((currTodo:Isubtodo)=>{
        let currType = currTodo.todoType || "none";
        
        if(!myMap[currType]){
            myMap[currType] = [];
        }

        myMap[currType].push(currTodo);
        
    })
    
    return myMap
}
import { customRequest } from "../../middlewares/auth.middleware";
import { Request,Response } from "express";
import { todotag } from "../../models/todotags.model";
import { user } from "../../models/user.model";
import { todolist } from "../../models/todolists";

export const createList =  async function createList(req:Request,res:Response){
    try {
        const id = (req as customRequest).userId.id;
        const listObj = req.body.list;
        
        listObj.user = id;
        const newList = new todolist(listObj)
        await newList.save();

        const userInstance =await  user.findById(id);

        userInstance?.lists.push(listObj);

        await userInstance?.save();

        return res.status(200).send({
            user:userInstance,
            tag:listObj
        })
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send(error);
    }
    


}

export const getLists = async function getLists(req:Request,res:Response){
    
    try {
        const id = (req as customRequest).userId.id;

    const userInstance = await  user.findById(id);
    
    if(!userInstance)
        return res.status(200).send({message:"user does not exist"});

    const lists = (await userInstance.populate('lists')).lists;

    return res.status(200).json(lists);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        
    }
    


}
import { customRequest } from "../../middlewares/auth.middleware";
import { Request,Response } from "express";
import { todotag } from "../../models/todotags.model";
import { user } from "../../models/user.model";

export const createTag =  async function createTag(req:Request,res:Response){
    try {
        const id = (req as customRequest).userId.id;
        const tagObj = req.body.tag;
        
        tagObj.user = id;
        const newTag = new todotag(tagObj)
        await newTag.save();

        const userInstance =await  user.findById(id);

        userInstance?.tags.push(tagObj);

        await userInstance?.save();

        return res.status(200).send({
            user:userInstance,
            tag:tagObj
        })
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send(error);
    }
    


}

export const getTags = async function getTags(req:Request,res:Response){
    
    try {
        const id = (req as customRequest).userId.id;

    const userInstance = await  user.findById(id);
    
    if(!userInstance)
        return res.status(200).send({message:"user does not exist"});
    const tags = (await userInstance.populate('tags')).tags;

    return res.status(200).json(tags);
    } catch (error) {
        console.log(error);
        return res.status(400).send(error);
        
    }
    


}
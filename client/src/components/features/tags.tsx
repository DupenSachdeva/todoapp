import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from '@/components/ui/button';
import{ useRecoilState , useRecoilValue } from "recoil"
import tagsatom from "@/store/atoms/tags";
import React from "react";

interface Tag{
    name:string,
    colour:string
}
interface TagPropsForSimple{
    tags:Tag[],
}
interface TagPropsForClick{
    recoilTags:Tag[],
    tags:Tag[],
    setTags:React.Dispatch<React.SetStateAction<Tag[]>>
    setShowTags:React.Dispatch<React.SetStateAction<Boolean>>
}


export const Tags = function Tags() {
    
    const [tags,setTags]= useRecoilState<Tag[]>(tagsatom);
    const [inputTag, setInputTag] = useState(false);
    const [newTagName, setNewTagName] = useState("");

    const handleTagCreation = function handleTagCreation() {
        let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+
            Math.floor(Math.random() * 255) + ")";
        
            setTags((tags:Tag[])=>[...tags,{name:newTagName,colour:color}]);
            setInputTag(false)

    }
    return <>
        <div className=" flex flex-wrap flex-col items-start h-fit   mt-4 justify-center w-full cursor-pointer">

            <div className="flex items-center gap-6 w-fit pt-3">
                <ShowTags tags={tags}></ShowTags>
                <div className="flex items-center gap-2 bg-black text-white px-1.5 py-1.5
            rounded-md  ">
                    <CiSquarePlus onClick={() => {
                        setInputTag(true);
                    }} /> Add Tag</div>



            </div>
            {inputTag && <div className="flex items-center gap-2 ml-4 m-4"><Input placeholder="Tag Name" onChange={(e) => setNewTagName(e.target.value)}>
            </Input>
                <Button className="cursor-pointer" onClick={handleTagCreation}> enter</Button></div>}
        </div>
    </>
}






export const ShowTags:React.FC<TagPropsForSimple> = function ShowTags({tags}){

    return <>
          <div className="flex gap-2">
          {tags.map((tag, index) => (
        <div
          key={index}
          className="tag"
          style={{
            backgroundColor: tag.colour,
            color: 'black',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
        >
          {tag.name}
        </div>
      ))}
          </div>
    </>
}


export const ShowTagsWithClick:React.FC<TagPropsForClick> = function ShowTagsWithClick({recoilTags,tags,setTags,setShowTags}){
    
    return <>
          <div className="flex gap-2">
          {recoilTags.map((tag, index) => (
        <div onClick={()=>{
            if(!tags.includes(tag))
            setTags([...tags,tag]);

            setShowTags(false);

        }}
          key={index}
          className="tag"
          style={{
            cursor:"pointer",
            backgroundColor: tag.colour,
            color: 'black',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
        >
          {tag.name}
        </div>
      ))}
          </div>
    </>
}
interface Tagprops{
    tags : Tag[],
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}
export const AddTagForTodo:React.FC<Tagprops> = function AddTagForTodo({tags,setTags}){
    
    const recoilTags = useRecoilValue(tagsatom);
    const [showTags,setShowTags] = React.useState<Boolean>(false);
    return <>
    <div className="flex flex-col gap-2">
    <div className="flex items-center gap-4"><ShowTags tags={tags}></ShowTags>
    <div className="flex w-24 items-center gap-2 text-red bg-slate-200 p-1
            rounded-md  mr-4 ">
                    <CiSquarePlus className="cursor-pointer " onClick={() => {
                         setShowTags(true);            
           
                    }} /> Add Tag</div></div>
    
                     {showTags && <div>
                           <ShowTagsWithClick recoilTags = {recoilTags} tags={tags} setTags={setTags} setShowTags={setShowTags}></ShowTagsWithClick>
                        </div>}
            
                    </div>
    </>
}

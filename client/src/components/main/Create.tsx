import { Input } from "@/components/ui/input"
import Select from 'react-select'
import { AddTagForTodo} from "../features/tags.tsx";
import { DatePickerDemo , styles } from "../style/utilities.create.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { useState } from "react";
import { useRecoilValue } from 'recoil';
import listsatom from "@/store/atoms/lists.tsx";


interface Tag{
    name:string,
    colour:string
}
const Create = function Create() {
    const lists = useRecoilValue(listsatom);
    
    const [tags,setTags] = useState<Tag[]>([]);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const curDate = new Date();
    const [currDate,setCurrDate] = useState<Date>(curDate);
    let type :String="";
    
    const options = [{value:"none",label:"none"}];

    console.log(currDate);
    
    lists.forEach((list)=>{
        options.push({
            value:list.name,label:list.name
        })
    })
    return <>
        <div className=" w-1/3  mt-2 bg-slate-50 mr-0 rounded-md">
            <div className="h-fit flex flex-col justify-around  w-full gap-2 ">
                <h1 className="text-2xl font-bold ml-4 mt-2">Add Task:</h1>
                <div className="flex flex-col gap-4 ">
                <Input  type="text" placeholder="title" className="border-0 mt-4 w-3/4 ml-4" onChange={(e)=>setTitle(e.target.value)}></Input>
                <Textarea className=" border-0 w-3/4 ml-4 h-28" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                  <div className="flex items-center justify-start ml-6 mt-4 ">
                    <div>List:</div>
                    <Select defaultValue={options[0]} onChange={(e)=>{
                        
                        type = e?.value || "";
                        console.log(type);
                        
                    }} className="ml-10 w-full" styles={styles} options={options} placeholder=""  />
                    </div>
                    
                    <div >
                    <div className="flex items-center justify-start ml-6 mt-4">
                    <h1>Due Date:</h1>
                    <DatePickerDemo currDate={currDate} setCurrDate={setCurrDate} ></DatePickerDemo>
                    </div>
                    </div>
                    
                    <div className="ml-6 mt-4 flex items-center justify-between">
                        Tags
                        <AddTagForTodo tags={tags} setTags={setTags}></AddTagForTodo>              
                    </div>
                    
                  <Button className="ml-6 mt-44 w-20 bg-gradient-to-r from-primary to-secondary">ADD</Button>

            </div>
        </div>
        </div>
    </>
}

export default Create;
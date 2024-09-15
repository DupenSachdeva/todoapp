import { CiSquarePlus } from "react-icons/ci";
import listsatom from '../../store/atoms/lists';
import { useRecoilState, useRecoilValue } from "recoil";
import { FC, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
interface List{
    name:string,
    colour:string
}
interface SimpleListProps{
    lists:List[]
}
export const Lists = function Lists() {
    const [inputListName,setInputListName] = useState("");
    const [showInput,setShowInput] = useState(false);
    const [lists,setLists] = useRecoilState<List[]>(listsatom);    
    const handleListCreation = function handleTagCreation() {
        let color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","+
            Math.floor(Math.random() * 255) + ")";
        
            setLists((lists:List[])=>[...lists,{name:inputListName,colour:color}]);
            setShowInput(false)

    }
    return <>
        

            <div className=" flex flex-col gap-4 w-fit   mt-4 ml-6">
                <ShowLists lists={lists}></ShowLists>
                <div className="flex items-center gap-2 bg-black text-white px-1.5 py-1.5
            rounded-md w-24">
            <CiSquarePlus  onClick={()=>setShowInput(true)}/> Add List</div>
            {showInput && <div className="flex mt-4 gap-2" >
                <Input placeholder=" List Name:" className="border-0" onChange={(e)=>setInputListName(e.target.value)}></Input>
                <Button onClick={handleListCreation}>Add</Button>
                </div>}
            
            </div>
    </>
}
const ShowLists:FC<SimpleListProps> = function ShowLists({lists}){
    return<>
      <div className="flex flex-col gap-2 w-fit items-center">
        {lists.map((list,index)=>{
            return <div className=""
            key={index}
          style={{
            backgroundColor: list.colour,
            color: 'black',
            padding: '5px 10px',
            borderRadius: '5px',
          }}
            >
                {list.name}
            </div>
        })}
      </div>
    </>
}

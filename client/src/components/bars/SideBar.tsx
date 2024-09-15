import { TbPlayerTrackNextFilled } from "react-icons/tb"
import { CgCalendarNext } from "react-icons/cg";
import { IoTodayOutline } from "react-icons/io5";
import { FaRegStickyNote } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

import {Tags} from "../features/tags";
import { Lists } from "../features/Lists";

const SideBar = function SideBar(){

    return <>
      <div className="shadow-md h-fit mt-2  w-1/3 bg-slate-50">

        <div className="">

            <h1 className="text-2xl font-bold px-6  ">Menu</h1>
            <div className=" flex  flex-col items-start h-fit   mt-4 justify-center w-full cursor-pointer border-b-2">
                <div className=" w-full p-3 hover:bg-slate-100 px-6">
                    <div className="flex items-center gap-2"><TbPlayerTrackNextFilled></TbPlayerTrackNextFilled> upcoming</div>
                   
                </div>
                <div className=" w-full p-3  px-6  hover:bg-slate-100 cursor-pointer">
                    <div className="flex gap-1 items-center"><IoTodayOutline />
                    Today</div>
                
                </div>
                <div className=" w-full p-3  px-6 hover:bg-slate-100 cursor-pointer">
                    <div className="flex items-center gap-1"><CgCalendarNext></CgCalendarNext>
                    calender</div>
                
                </div>
                <div className=" w-full p-3 px-6 hover:bg-slate-100 cursor-pointer">
                <div className="flex gap-1 items-center"><FaRegStickyNote />
                Sticky Wall</div>
                
                </div>
            </div>

            
        </div>

        <div className="text-2xl font-bold px-6 pt-2 ">Lists</div>
            <Lists></Lists>
        <div className="text-2xl font-bold px-6 pt-2 ">Tags</div>
            <Tags></Tags>
        <div className=" w-full mt-36 p-3 px-6  hover:bg-slate-100 cursor-pointer">
        <div className="flex items-center gap-2">
        <FaSignOutAlt />
        Sign Out</div>
        </div>
      </div>
      
    </>
}
export default SideBar
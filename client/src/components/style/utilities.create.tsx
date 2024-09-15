 
"use client"
import recoil, { useRecoilValue } from "recoil"
import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import tagsatom from "@/store/atoms/tags"
import { CiSquarePlus } from 'react-icons/ci';

interface dateProps{
    currDate:Date,
    setCurrDate : React.Dispatch<React.SetStateAction<Date>>
    
}
export const DatePickerDemo:React.FC<dateProps> = function DatePickerDemo({currDate,setCurrDate}) {
 const [date,setDate] = React.useState<Date>();
if(date){
  setCurrDate(date);
  
} 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full text-left font-normal bg-slate-50 border-0 ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date,"PPP") : <span></span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export const styles = {

    control: (provided: any, state: any) => ({
        ...provided,
        backgroundColor:  "slate-50", // Control background color
        border:"none",
        '&:hover': { 
        }, // Border color on hover
      }),
      option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#007bff' : '#f7f7f7', // Option background color
        color: state.isFocused ? '#fff' : '#333', // Text color for focused and unfocused options
        '&:active': { backgroundColor: '#0056b3' }, // Background color on option click
      }),
}

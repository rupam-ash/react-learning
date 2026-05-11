import { useState } from "react";
import AccordianItem from "./AccordianItem";


const Accordian = ({data}) =>{
    const [curOpen , setcurOpen] = useState(null)
return (
   <div className="accordian ">
    {data.map((curData) => <AccordianItem key={curData.id} num={curData.id} question={curData.question} answer= {curData.answer} curOpen={curOpen} setcurOpen={setcurOpen}/>)}
   </div> 
)
}
export default Accordian
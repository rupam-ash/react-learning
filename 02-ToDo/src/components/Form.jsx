import { useState } from 'react';

const Form = ({addTodo}) =>{
 const [input , setInput] = useState("")
const handelSubmit=(e)=>{
    e.preventDefault();
    const newTodo = {input , done:false , id:Date.now()}
    addTodo(newTodo)
    setInput("")
}
return (
    <div>
        <p> YOUR DAILY TRACKER </p>
        <form onSubmit={handelSubmit} className='form'>
        <input  value= {input}type="text" placeholder="Add yout todos ..." onChange={(e)=>setInput(e.target.value)}/>
        <button>Add</button>
        </form>
    </div>
 
)
}
export default Form
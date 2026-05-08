import { useState } from 'react';
import Display from "./components/Display"
import Form from "./components/Form"
import Summary from './components/Summary';

const App = () =>{
  const [todo , settodo] = useState([])
 
  const addTodo = (newTodo) =>{
    settodo((todos) => [...todos , newTodo])
  }

  const crossButton =(curid)=>{
    settodo((todo) => todo.filter(curTodo => curTodo.id !== curid))
  }

  const toggleButton =(curid) =>{
    settodo((todo) =>
    todo.map((curtodo) => curtodo.id === curid ? {...curtodo , done : !curtodo.done}:curtodo)
  )
  }
const clearButton =() =>{
  const confirm = window.confirm("Are you sure you want to delete all the item ?")
  if(confirm) settodo([])
}
  return (
    <div className='container'>
    <Form addTodo={addTodo}/>
    <Display todo={todo} crossButton={crossButton} toggleButton={toggleButton}/>
    <Summary todo={todo} clearButton={clearButton}/>
    </div>
  )
}
export default App
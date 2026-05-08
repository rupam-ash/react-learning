const Display = ({todo , crossButton , toggleButton}) =>{
    return(
       <div className="todo-list" > {todo.map((curTodo) => 
       <li key={curTodo.id} className="todo-item">
        <input checked={curTodo.done} type={"checkbox"} onChange={()=>toggleButton(curTodo.id)}/>
        <span className="todo-text " style={curTodo.done? {textDecoration:"line-through"} : {} }>{curTodo.input}</span>
        <button  className="delete-btn"   onClick={()=>crossButton(curTodo.id)}>&#x2716;</button>
        </li>)}
       </div>
    )
}
export default  Display
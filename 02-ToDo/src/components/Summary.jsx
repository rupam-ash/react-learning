const Summary = ({todo , clearButton}) =>{
const numTodo = todo.length
const completeTodo = todo.filter((curTodo) => curTodo.done).length
const percentageTodo = Math.round((completeTodo/numTodo)*100)

if(todo.length === 0) return (
    <div>
        <p>Add your daily task and track it through the day 🔥 </p>
    </div>
)

return (
<footer>
    {percentageTodo === 100 ? <p className="footer-text">You hav ecompleted all the task 😊</p> : <p className="footer-text"><strong>{completeTodo}</strong> task done and you have completed <strong>{percentageTodo}%</strong>tasks</p>}
<div className="delete-btn-class" >
    <button className="delete-btn" onClick={clearButton}>clear all TODO</button>
    </div>
</footer>
)

}
export default Summary
import { useState } from "react";
import "./index.css"
 const reactFlashcards = [
  {
    id: "react-01",
    question: "What is the difference between state and props in React?",
    answer: "Props are read-only and passed from parent to child, while state is managed within a component and can change over time."
  },
  {
    id: "react-02",
    question: "What is useState in React?",
    answer: "useState is a Hook that allows you to add state to functional components. It returns a state value and a function to update it."
  },
  {
    id: "react-03",
    question: "What is useEffect and when is it used?",
    answer: "useEffect is a Hook used for side effects like API calls, DOM updates, and subscriptions. It runs after the component renders."
  },
  {
    id: "react-04",
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the real DOM. React uses it to efficiently update only the parts of the UI that change."
  },
  {
    id: "react-05",
    question: "What are controlled vs uncontrolled components?",
    answer: "Controlled components are managed by React state, while uncontrolled components store data in the DOM itself using refs."
  },
  {
    id: "react-06",
    question: "What is a key in React lists and why is it important?",
    answer: "A key is a unique identifier for elements in a list. It helps React efficiently update and re-render items."
  }
];

const App = () =>{
  const [ans , setAns] = useState(null)
  const clickHandeller =(value) =>{
    if(ans !== value){
    setAns(value)
    }else{
      setAns(null)
    }
  }
  return (
    <div className="container">
    <div className="questionContainer">
    {reactFlashcards.map((items) => (
      <div key={items.id} onClick={()=>clickHandeller(items.id)} className={ans === items.id ? "active" : "question"} ><p className="font">{ans === items.id ? items.answer : items.question}</p></div>
    ))}
  </div>
  </div>
  )
}
export default App
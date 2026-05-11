import Accordian from "./components/Accordian"
const reactQuestions = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library used for building user interfaces using reusable components."
  },

  {
    id: 2,
    question: "What is the purpose of useState in React?",
    answer:
      "useState is a React Hook that allows functional components to store and update state."
  },

  {
    id: 3,
    question: "What is conditional rendering in React?",
    answer:
      "Conditional rendering means displaying different UI elements based on certain conditions or state values."
  },

  {
    id: 4,
    question: "Why do we use keys while rendering lists in React?",
    answer:
      "Keys help React identify which items changed, were added, or removed for efficient re-rendering."
  },

  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props are used to pass data from a parent component to a child component."
  }
];
const App =() =>{
return (
  <Accordian data = {reactQuestions}/>
)
}
export default App
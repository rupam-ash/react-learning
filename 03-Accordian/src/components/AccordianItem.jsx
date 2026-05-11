const AccordianItem = ({num , question ,answer, curOpen , setcurOpen}) =>{
    const isOpen = curOpen === num
    const toggleFn = (num) =>{
        setcurOpen((prev) => prev === num ? null : num )
    }
    return (
        <div className="containerItem" onClick={() => toggleFn(num)}>
            <p className="id">{num}</p> 
            <p className="mainContent">{ isOpen ? answer : question }</p> 
            <p className="icon">{isOpen ? "-" : "+"}</p> 
        </div>
           
    )
}
export default AccordianItem
import react, { useState }from "react";
import "./calculator.css"

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) =>{
        setInput(input+value);
    };
    const handleClear = () =>{
        setInput("");
        setResult("");
    };
    const handleCalculate = () =>{
        try {
            const evalResult = eval(input);
            setResult(evalResult);
         } catch(error){
            setResult("Error");
         }
        };
        return (
            <div className="item-1">
                <h1>React calculator</h1>
                <div className="display">
                <input type="text" value={input} placeholder="0" disabled/>
                <h2> RESULT:{result}</h2>  
        </div>
        <div className="button">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={handleClear}>c</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleCalculate} className="equals" placeholder="0">
         = 
        </button>
        </div>
        </div>
        );
    }
export default App;

        
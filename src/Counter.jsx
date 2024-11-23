import { useState } from "react";

function Counter () {
    const [count , setCount] = useState(1);

    return (
        <div className="container">
            <h1>Counter App</h1>
            <h2> {count} </h2>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}
export default Counter;
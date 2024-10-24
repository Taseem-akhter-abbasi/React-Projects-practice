import { useState } from "react";


export default function Counter() {
    const [count, setcount] = useState(0);
    const inrement = ()=>{
        setcount(count +1);
        


    };
    const decrement = ()=>{
        setcount(count-1);
    };
    const reset = () =>{
        setcount(0);
    };
    
  return (
    <div>
        <p>this is my counter{count}</p>
        <button onClick={inrement}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
    
  )
}


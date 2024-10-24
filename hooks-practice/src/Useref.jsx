import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const Useref = () => {
    const[name, setname] = useState("");
    const refelement = useRef("");
    function handle(){
        setname("");
    }
    function handleinput(){
        refelement.current.style.color= "blue";
        refelement.current.style.backgroundColor= "black";
    }
    

  return (
    <div>
        <input  ref={refelement} type="text" value={name} placeholder='entrr somthing ' onChange={(e)=>setname(e.target.value)} />
        <button onClick={handle}>button</button>
        <button onClick={handleinput}>butn2</button>
    </div>
  )
}

export default Useref
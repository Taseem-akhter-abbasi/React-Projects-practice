import React from 'react'
import {useState} from 'react'

export default function color() {
    const [currentcolor,setcolor] = useState("green");
    const light = ()=>{
        if(currentcolor == "green"){
            setcolor("black");
            document.body.style.backgroundColor = "black";
        }
        else{
            setcolor("green");
            document.body.style.backgroundColor = "aqua";
        }
        

    }
  return (
    <div>
        <button onClick={light}>click</button>
    </div>
  )
}

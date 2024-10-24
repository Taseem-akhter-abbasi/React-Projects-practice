import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const EFFECT = () => {
  const[count,setcount] = useState(0);
  
    
  useEffect(()=>{
  console.log("mounted");

  },[count]);
  function clicked(){
    setcount(count + 1);
  }
  
  
  return (
    <div>
      <button onClick={clicked}>click me </button>
      <p>button clicked {count}</p>
    </div>
  )
}

export default EFFECT
import React from 'react'
import { useState } from 'react'

const Problem2 = () => {
    const[click,unckick] = useState(false);
   function change(){

    unckick(!click)


   }
  return (
    <>
    <button onClick={change}>click</button>
    {click&&<p> toglig </p>}
    </>
    
  );
}

export default Problem2
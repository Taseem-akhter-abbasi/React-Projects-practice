import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

const Usememo = () => {
    const [add,setadd] = useState(0);
    const [sub,setsub] = useState(100);

   const mul= useMemo(function multi(){
    return add*10;
   },[add])   
//    if i am not using memo then by clicking on sub buttun the mul will be call again an aagain
  return (
   
   <>
   <button onClick={()=>setadd(add+1)} value={add}>add</button>
   <span>{add}</span>
   <button onClick={()=>setsub(sub-1)} value={sub}>sub</button>
   <span>{sub}</span><br></br>
   <span>{mul}</span>
   </>
  )
}

export default Usememo
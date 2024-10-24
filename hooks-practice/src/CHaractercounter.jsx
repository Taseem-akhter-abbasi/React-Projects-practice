import React from 'react'
import { useState } from 'react'

function CHaractercounter() {
    const[set, unset] = useState('');
    const[count, uncount]= useState(0);
    function changehandle(event){
        unset(event.target.value);
        uncount(count+1)
    }





  return (
   <>
    <input type="text" value={set} placeholder='enter the characters' onChange={changehandle}/>
    <p>the number of character = {count}</p>
    </>
  )
}

export default CHaractercounter
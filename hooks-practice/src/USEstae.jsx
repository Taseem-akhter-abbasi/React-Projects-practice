import React from 'react'
import { useState } from 'react'

const USEstae = () => {
    const[set, unset] = useState('');
    function handlechange (event){
       unset(event.target.value);
        
    }



  return (
   <>
   <input type="text" value={set} onChange={handlechange} placeholder='plz enter your text '/>
   <p> the new text is : {set}</p>
   </>
  );
  };


export default USEstae
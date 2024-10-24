import React from 'react'
import { useState } from 'react';

const Searchfilter = () => {
    const fruits = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Mango',
        'Strawberry',
        'Pineapple',
        'Watermelon',
        'Blueberry',
        'Kiwi'
    ];
    
   
    
    
    const [input,newinput] = useState('');
    function uservalue(e) {
        newinput(e.target.value);
        
    }
    const filterdfruit = fruits.filter(fruit=> fruit.toLowerCase().includes(input.toLowerCase())
);

    


  return (
  <>
  <input type="text" placeholder='Search here' value={input} onChange={uservalue}/>
 <ul>{filterdfruit.map((item,index)=>(<li key={index}>{item}</li>))}</ul> 
  </>
  );
}

export default Searchfilter
import React from 'react'
import { useState } from 'react';

function RENDER() {
    const [count, setcount] = useState(0)
    const products = [
        { id:1,name:'taseem'},
        {id:2,name:'jigoo'},
        {id:3,name:'mamoon'}
    ];
    const list = products.map(product=>
        <li key ={product.id}>{product.name}</li>
    );
    function handleclick(){

        setcount(prevCount => prevCount + 1);

        
    }
  return (
    <>
      <ul>{list}</ul>
      <button onClick={handleclick}> you clicked me{count}</button>
      <button onClick={handleclick}> you click{count}</button>
      </>



    
  )
}

export default RENDER
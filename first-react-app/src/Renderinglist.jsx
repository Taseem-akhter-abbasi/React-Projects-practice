import React from 'react'

function Renderinglist() {
    const  fruits = ["apple", "banana", "pineapple"];
    const listitems = fruits.map(fruit=> <li>{fruit}</li>)
    const veg = [ {name : "carrot", calories: 100},
        {name : "turnips", calories: 95},
        {name : "babage", calories: 70},
        {name : "potatoe", calories: 80}
        
    ];
    
  return (
    
    <div>
        <ul>{listitems}</ul>
        
    </div>
  )
}

export default Renderinglist;
import { useState } from "react";
import React from 'react'

export default function Textinput() {
    const [input, setinput] = useState("")
    const [quantity,setquantity] = useState();
    const [payment,setpayment] = useState();
    const [shipping,unshipping] = useState();
    const onchangeshipping = (e) =>{
        unshipping(e.target.value);
    }
    const onChangehandle = (e) =>{
        setpayment(e.target.value);
    }

    const handlechange = (e) =>{
        setinput(e.target.value);
    }
    const handlequantity = (e) =>{
        setquantity(e.target.value);
    }

  return (
    <div>
        <input type="text" placeholder="Enter your Text" onChange={handlechange} />
        <p>your text is &bsp; {input}</p>
        <input type="number" value={quantity} onChange={handlequantity}/>
        <p> quanitity is : {quantity}</p>
        <select value={payment}  onChange={onChangehandle}>
            <option value="enter your card type" >select your type of card</option>
            <option value="birthdaycard">birthdaycard</option>
            <option value="weddingcard">weddingcard</option>
            <option value="janucard">ucard</option>
       </select>
            <label >
                
                <input type="radio" value="pickup"  
                checked= {shipping === "pickup"} onChange={onchangeshipping}/>
                pickup!
            </label>
            <label >
              
                <input type="radio" value="delivery"  
                checked= {shipping === "delivery"} onChange={onchangeshipping}/>
                  delivery!
            </label>
            
        
        <p>payment : {payment}</p>
    </div>
  )
}

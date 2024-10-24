// import {useState} from 'react'
import React from 'react'

const Shoppingcart = () => {
    const styles={
        backgroundColor: "blue",
        color: "white",
        padding:"0%",
        margin: "10px",
        height: "45px"
    }
    const styled={
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "row", // Align items horizontally
        justifyContent: "space-between",
        borderRadius: "10px",
        margin: "10px",

    
        
    }
    const prodlist = [
        { id:1,name:"dress",price:2000},
        { id:2,name:"shoes",price:1900},
        { id:3,name:"bag",price:1800}
    ]

  return (
    <><div style={{ marginLeft: "400px", display:"inline-block"}}><h1 style={{ textAlign: "center"}}>Shoppingcart</h1></div>
    {prodlist.map(product=>(
        <div style={styled}>Item-NO:{product.id}
        
        <h1>{product.name}</h1>
        <p>price : {product.price}<hr></hr></p>
        <button style={styles} onClick={()=>addtocart(product)} >Add-TO-Cart</button>
        </div>
    ))

    }
    </>
  );
}

export default Shoppingcart
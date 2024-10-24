import { useState } from 'react';
// import Color from './Color';
import Shoppingcart from './Shoppingcart';

function App() {
  const [cart,newcart] = useState([]);

  const addtocart = (prod)=>{
    newcart([...cart,prod]);

  };
 
     return(
      <>
      {/* <Color/> */}
      <p>displaying of new carts{newcart}</p>
      <Shoppingcart addtocart={addtocart}/>
      </>
     )
}

export default App

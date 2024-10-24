import React from 'react'
import Data from './Data';

const Showcart = () => {
  return (
    <>
    <h2 style={{ color: 'white' }}>Your Cart</h2>
            <div style={{ border: '2px solid blue', padding: '16px', backgroundColor: 'lightgray' }}>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {cart.map((item, index) => (
                                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid gray', borderRadius: '10px', padding: '10px', backgroundColor: 'white' }}>
                                    <div>
                                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }} />
                                        {item.name} - ${item.price.toFixed(2)}
                                    </div>
                                    <button onClick={() => handleRemoveFromCart(item.id)} style={{ padding: '5px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>Remove</button>
                                </div>
                            ))}
                        </div>
                        <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    </>
                )}
            </div>
        </>
    );
}
    
    </>
  )
}

export default Showcart
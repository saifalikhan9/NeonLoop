import React from 'react'
import CartItems from './CartItems'


const Cart = () => {
  return (
    <div className="w-full ">
    <div className="text-white flex flex-col items-center   " >
      <h1 className=" my-5 p-5 text-4xl font-serif font-black text-purple-500 " > Your Cart </h1>  {/* i want to set it in the center of the screen on x axis */} 
        <div className='inline-flex space-x-80 ' >
          <h1>Products</h1>
          <h1>Price</h1>
        </div>
        <CartItems/>
    </div>
  </div>
  )
}

export default Cart
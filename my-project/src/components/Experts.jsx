import React from 'react'
import laptop from '../assets/laptop.jpeg'

const Experts = () => {
  return (
    <div className='max-w-[1140px] p-2 my-10 mx-auto md:grid grid-cols-2'>
    <div className='col-span-1 md:w-[80%]'>
    <img src={laptop} alt="" className='inline' />
      
    </div>
    <div className='  col-span-1 flex flex-col justify-center '>
      <h1 className='text-[#00df9a] font-bold my-2'>Learn from Experts</h1>
      <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum esse cupiditate, sint animi blanditiis ea? Nesciunt deleniti voluptas, minima, voluptates ea magni excepturi nisi eaque, harum commodi dignissimos numquam aliquid!</p>
      <button className=' inline w-[30%] my-2 bg-black text-white p-3 rounded'>Get started</button>
   
    </div>
    </div>
  )
}

export default Experts
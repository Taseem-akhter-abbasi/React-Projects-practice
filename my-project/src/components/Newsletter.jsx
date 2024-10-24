import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-[100%] bg-blue-500 p-4'>
        <div className='max-w-[1140] mx-auto md:flex justify-between py-[50px] px-[5%]'>
        <div className='m-2 h-[200px]'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'> want to learn latest it skills?</h1>
            <span className='text-white'>sign up our news-letter and stay upto date</span>
        </div>
        <div className='m-2 p-3'>
            <input type="text" placeholder='Email' className='mb-2 p-3 mr-2 text-slate-600 rounded' />
            <button className='bg-black text-white p-3 rounded'>Get started</button>
            <br />
            <p className='text-white'>we care about the protection of your data read our <br/> <a href="" className='text-black'>Privacy Policy</a></p>
        </div>
    
    </div>
    </div>
  )
}

export default Newsletter
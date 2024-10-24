import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['web development', 'Designer'],
        loop: true,  // Set to true for continuous typing
        typeSpeed: 100,
        deleteSpeed: 50,
      });

  return (
    <div className='bg-blue-500 w-full py-[50px]'>
      <div className='my-[100px] max-w-[1140px] mx-auto text-center font-bold'>
        <div className='text-xl md:text-3xl md:p-[24px]'>
        Learn with us
        </div>
        <h2 className='text-white text-5xl md:text-[70px] md:p-[24px]'>Grow with us</h2>
        <div className='text-[20px] md:text-[50px] text-white md:p-[24px]'>
        Learn <span>{text}</span> <Cursor />
          
        </div>
        <button className='bg-black text-white p-3 rounded'>Get started</button>
      </div>
    </div>
  );
};

export default Banner;

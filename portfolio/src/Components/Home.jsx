import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-black text-white w-[100%] px-8 md:px-16 lg:px-24'>
      <div className='py-2 flex justify-center md:justify-between items-center'>
        <div>
          <div className='text-2xl font-bold hidden md:inline'>Taseem Akhter Abbasi</div>
        </div>
        <div className='space-x-6'>
          <ul className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#projec" className='hover:text-gray-400'>Projects</a>
            <a href="#services" className='hover:text-gray-400'>Services</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
            <a href="#footer" className='hover:text-gray-400'>Footer</a>
          </ul>
        </div>
        <button className='bg-gradient-to-r from-green-500 to-blue-500 py-2 px-4 rounded-full text-white hidden md:inline transform transition-transform duration-300 hover:scale-105'>
          Connect Me
        </button>
      </div>
    </div>
  );
}

export default Home;

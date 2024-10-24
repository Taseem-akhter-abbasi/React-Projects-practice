import React from 'react'
import image from '../assets/taseem.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['frontend web developer', ' responsive Designer'],
    loop: true,  // Set to true for continuous typing
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div id="home" className='bg-black text-white text-center py-16'>
        <img src={image} alt="image"  className='mx-auto mb-8 rounded-full object-cover transform transition-transform duration-300 hover:scale-105 h-52'/>
        <h1 className='text-4xl font-bold'>
            I 'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Taseem Akhter Abbasi <span className='text-white'>{text}</span> <Cursor /></span>
        </h1>
        <p className='mt-4 text-lg text-gray-300'>I speciliezed in building modern and responsive web applications</p>
        <div className='mt-8 space-x-6'>
            <button className='bg-gradient-to-r from-green-500 to-blue-500 py-2 px-4 rounded-full text-white hidden md:inline transform transition-transform duration-300 hover:scale-105'>contact with me</button>
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 py-2 px-4 rounded-full text-white hidden md:inline transform transition-transform duration-300 hover:scale-105'>Resume</button>
        </div>
    
    </div>
  )
}

export default Hero
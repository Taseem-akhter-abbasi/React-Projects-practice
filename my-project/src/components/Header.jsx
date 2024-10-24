import React, { useState } from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const[toggle,settoggle]= useState(false);
    //  we use this to add logic in cross and menue button for responsivness
  return (
    <div className='bg-blue-500 p-4'>
      <div className='max-w-[1140px] py-[12px] item-centre  flex justify-between  mx-auto'>
        <div className='text-3xl font-bold'>
            WsCube Tech
        </div>
        {
            toggle ?
        <AiOutlineMenu onClick={()=>settoggle(!toggle)} className='text-white text-2xl md:hidden block'/>
        :
        <AiOutlineClose onClick={()=>settoggle(!toggle)} className='text-white text-2xl md:hidden block'/>
         }
         {/* this logic is for toggling btween cross and menu when munu then cross will be disappear */}
        <ul className='hidden md:flex text-white gap-10'>
            {/* thia ia for responsivness md = meduim sa bellow jyga to hide hojyega */}
            <li>
                home
            </li>
            <li>
                company
            </li>
            <li>
                 resources
            </li>
            <li>
                about
            </li>
            <li>
                contact
            </li>
        </ul>
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] 
             ${toggle ? 'left-[0]':'left-[-100%]'}`}>
                {/* this logic is use to hide and showing of menu  */}
            {/* thia ia for responsivness md = meduim sa bellow jyga to hide hojyega, h-creen mean height will be 100% */}
            <li className='p-5'>
                home
            </li >
            <li className='p-5'>
                company
            </li>
            <li className='p-5'>
                 resources
            </li >
            <li className='p-5'>
                about
            </li>
            <li className='p-5'>
                contact
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

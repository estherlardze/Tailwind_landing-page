import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const handleNav = () => {
        setToggleNav(!toggleNav)
    }
  return (
    <div className='w-full text-white'>

     <div className='flex justify-between'>  
        <h1 className='text-[#42f590] text-4xl font-semibold p-4'>ANALICARE</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 text-[20px]'>Home</li>
            <li className='p-4 text-[20px]'>Analytics</li>
            <li className='p-4 text-[20px]'>Newsletter</li>
            <li className='p-4 text-[20px]'>Contact</li>
        </ul>

       <div onClick={handleNav} className='block md:hidden'>
          {toggleNav ? <AiOutlineClose size={27} className='m-4'/> :
                     <AiOutlineMenu size={27} className='m-4'/>
            }
      </div>
      </div>     
      <div>
        {
        toggleNav && 
        <ul className='block md:hidden fixed left-0 top-0 pt-8 bg-[#000300] h-[100vh] w-[80%] ease-in-out duration-500 z-10'>
            <li className='p-4 text-[20px] border-b border-[#374151]'>Home</li>
            <li className='p-4 text-[20px] border-b border-[#374151]'>Analytics</li>
            <li className='p-4 text-[20px] border-b border-[#374151]'>Newsletter</li>
            <li className='p-4 text-[20px] border-b border-[#374151]'>Contact</li>
        </ul>
}
      </div> 
    </div>
  )
}

export default Navbar

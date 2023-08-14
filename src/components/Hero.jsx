import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Hero = () => {
    const [text ] = useTypewriter({
       words: ["BTC", "BTB", "SASS"],
       loop: {},
       typeSpeed: 200,
       deleteSpeed: 200
    })

  return (
    <div data-aos="fade-up" className='text-white max-w-[1248px] flex justify-center items-center flex-col py-40 mx-auto'>
        <p className='text-[#55e794] uppercase text-lg py-4'>Growing with Data Analytics</p>
        <h1 className='text-2xl md:text-4xl font-bold'>GROW WITH DATA</h1>
        <div className='flex'>
         <h3 className='text-lg md:text-3xl font-bold pt-3 pb-1'>Fast, flexible financing for </h3>
          <span className='sm:text-lg mt-[-1px] md:text-2xl font-bold pt-4 pb-1 ml-2 md:mt-[0]'>
            {text}
          </span>
          <span className='pt-4 mt-[-1px] md:mt-1'>
          <Cursor cursorStyle="|"/>
          </span>
        </div>
        <p className='text-[#9d9999] mx-8'>Monitor your data anlytics to increase revenue for BTB, BTC, & SAAS platforms</p>
        <button className='bg-[#4ff497] text-black py-1 px-4 font-bold rounded-md mt-4'>Get Started</button>
    </div>
  )
}

export default Hero

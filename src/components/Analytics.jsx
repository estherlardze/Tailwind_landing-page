import React from 'react';
import bg from '../assets/image.jpg'

const Analytics = () => {
  return (
    <div className='bg-white w-[100%] grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-20 md:px-28 lg:px-60'>
      <div data-aos="fade-left">
       <img src={bg}  alt="/" className='w-[400px] h-[250px]'/>
      </div>

      <div data-aos="fade-right">
        <h1 className='text-[#4fed93] font-bold'>DATA ANALYTICS DASHBOARD</h1>
        <h3 className='font-bold capitalize py-2'>Manage data analytics centrally</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Voluptas impedit vero iusto provident obcaecati aliquid 
         recusandae minima temporibus maxime, nostrum, fugiat 
         aperiam ut corporis officia blanditiis similique deleniti 
         consequuntur aut!</p>
         <button className='bg-black text-[#4fed93] rounded-md py-2 px-4 mt-6'>Get Started</button>
      </div>
    </div>
  )
}

export default Analytics

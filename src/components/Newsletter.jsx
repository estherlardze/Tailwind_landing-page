import React from 'react';

const Newsletter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-12 max-w-[1350px] text-white py-16 mx-8'>
      <div data-aos="fade-left">
      <h1 className='text-xl md:text-3xl font-bold'>Wants tips and tricks to optimise your flow</h1>
      <p>Sign up to our news letter and stay up to data</p>
      </div>
      <div>
         <div data-aos="fade-right">
            <input type="text" placeholder='Enter your email' className='rounded-md py-2 px-3 border-0 text-black outline-none'/>
            <button className='bg-[#43d080] py-2 px-4 text-black font-bold rounded-md ml-3'>Notify me</button>
         </div>
        <p className='mt-4'>We care about the protection of your data. Read our</p>
         <a href="#" className='underline text-[#55e794]'>Privacy Policy</a>
      </div>
    </div>
  )
}

export default Newsletter

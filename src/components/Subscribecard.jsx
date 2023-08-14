import React from 'react';

const Subscribecard = ({image, user, price, storage, allowed, transfer}) => {
  return (
    <div data-aos="fade-up" className='bg-gray-200 px-4 rounded-md w-[300px] flex flex-col justify-center items-center py-8 shadow-xl hover:scale-105 duration-100 ease-in-out cursor-pointer'>
      <p >{image}</p>
      <h5 className='text-xl font-bold'>{user}</h5>
      <h3 className='text-3xl font-bold my-4'>{price}</h3>
      <p className='text-[18px] font-medium my-1'>{storage}</p>
      <p className='text-[18px] font-medium my-1'>{allowed}</p>
      <p className='text-[18px] font-medium my-1'>{transfer}</p>
      <button className='bg-[#38c876] text-black px-8 py-2 rounded-md font-bold mt-4'>Start trial</button>
    </div>
  )
}

export default Subscribecard

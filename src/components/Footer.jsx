import React from 'react';
import {AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'


const Footer = () => {


  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8 py-4 gap-4 mx-4'>
      <div data-aos="fade-left">
        <h1 className='text-[#42f590] text-2xl font-semibold mb-2'>ANALICARE</h1>
        <p>Lorem, ipsum dolor  a aliquid deleniti pariatur voluptatibus deserunt repudiandae eaque!</p>
        <p className='flex gap-2 mt-4'><AiFillFacebook size={27} /> 
            <AiOutlineTwitter size={27} /> 
            <AiOutlineInstagram size={27} />
            <AiFillGithub size={27} />
            </p>
      </div>
      <div data-aos="fade-left">
        <h1 className='text-xl font-bold mb-3'>Solution</h1>
        <ul>
            <li>Home</li>
            <li>Analytics</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </div>
      <div data-aos="fade-right">
      <h1 className='text-xl font-bold mb-3'>Support</h1>
        <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guide</li>
            <li>Insight</li>
        </ul>
      </div>
      <div data-aos="fade-right">
      <h1 className='text-xl font-bold mb-3'>Company</h1>
        <ul>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

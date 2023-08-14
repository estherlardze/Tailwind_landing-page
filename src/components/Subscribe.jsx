import React from 'react';
import Subscribecard from './Subscribecard';
import {AiOutlineUser, AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbUsersGroup} from 'react-icons/tb'


const Subscribe = ({image, user, price, storage, allowed, transfer}) => {
  return (
    <div className='bg-white px-20 py-20 flex gap-12 flex-col md:flex-row justify-center items-center'>
      <Subscribecard image={<AiOutlineUser size={50}/>}  user="Single User" price="$125" storage="500 GB storage"
        allowed="1 User allowed" transfer="Send up to 2 GB"/>
         <Subscribecard image={<AiOutlineUsergroupAdd size={50}/>}  user="Partnership" price="$250" storage="1 TB storage"
        allowed="3 UserS allowed" transfer="Send up to 5 GB"/>
         <Subscribecard image={<TbUsersGroup size={50}/>}  user="Group account" price="$305" storage="5 TB storage"
        allowed="10 UserS allowed" transfer="Send up to 10 GB"/>
    </div>
  )
}

export default Subscribe

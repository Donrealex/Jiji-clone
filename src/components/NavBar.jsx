import React from 'react'
import { FaUser } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { IoMdBookmark } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdMessage } from 'react-icons/md'
import Button from './Button'


const NavBar = () => {
  return (
    <section className='flex items-center bg-primary p-2 justify-between px-30 border-b-1 border-b-gray-500'>
        <h1 className='text-white text-4xl font-bold'>Jiji</h1>

        <div className='flex items-center gap-5'>
            <div className='p-1.5 bg-white rounded-full'><IoMdBookmark color='grey' size={25} /></div>
            <div className='p-1.5 bg-white rounded-full'><MdMessage color='grey' size={25} /></div>
            <div className='p-1.5 bg-white rounded-full'><IoNotifications color='grey' size={25} /></div>
            <div className='p-1.5 bg-white rounded-full'><ImNewspaper color='grey' size={25} /></div>
            <div className='p-1.5 bg-gray-500 rounded-full border-1 border-white'><FaUser color='white' size={25} /></div>
            <Button name="SELL" style={'px-10 bg-navbutton text-white font-semibold cursor-pointer'} />
        </div>
    </section>
  )
}

export default NavBar
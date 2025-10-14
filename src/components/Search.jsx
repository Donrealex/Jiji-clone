import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'

const Search = () => {
    return (
        <section className=' flex flex-col items-center justify-center gap-5 bg-primary pt-35 pb-20 rounded-b-3xl mb-1000'>
            <h1 className='text-white text-2xl font-semibold'>What are you looking for?</h1>
            <div className='flex items-center gap-5'>
                <div className='flex items-center justify-center p-3 bg-white rounded-xl text-gray-500 font-medium'>All Nigeria <IoMdArrowDropdown color='grey' size={25} /></div>
                <div className='relative'>
                    <input type='text' placeholder='I am looking for...' className='p-3 pr-20 bg-white rounded-xl font-medium text-gray-900 w-100 focus:outline-0 focus:text-black focus:font-normal' />
                    <div className='absolute top-3 right-3'><IoSearchSharp color='grey' size={23} /></div>
                </div>
            </div>
        </section>
    )
}

export default Search
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'

const Search = () => {
    const [allnigeria, setAllnigeria] = useState(false)
    return (
        <section className=' flex flex-col items-center justify-center gap-5 bg-primary pt-35 pb-20 rounded-b-3xl mb-1000'>
            <h1 className='text-white text-2xl font-semibold'>What are you looking for?</h1>
            <div className='flex items-center gap-5'>
                <div onClick={() => { setAllnigeria(!allnigeria) }} className='flex items-center cursor-pointer justify-center p-3 bg-white rounded-xl text-gray-500 font-medium'>All Nigeria <IoMdArrowDropdown color='grey' size={25} /></div>
                {allnigeria ? <div className='absolute flex flex-col top-25 w-5/7 left-50 z-40 h-130 bg-[var(--color-searchbg)] rounded-xl'>
                    <p onClick={() => { setAllnigeria(!allnigeria) }} className='absolute right-3 cursor-pointer font-semibold text-lg'>X</p>
                    <div className='flex items-center justify-between px-10 py-3'>
                        <p>All Nigeria <span className='text-gray-500'>&#8226; 2 456 660 Ads</span></p>
                        <div className='relative'>
                            <input type='text' placeholder='Find state, city or district.....' className='py-3 pl-3 w-70 pr-10 bg-white rounded-xl text-gray-900 focus:outline-0 focus:font-normal' />
                            <div className='absolute top-3 right-3'><IoSearchSharp color='grey' size={23} /></div>
                        </div>
                    </div>
                    <div className='flex gap-2 px-2 pr-3 pb-3 overflow-y-auto'>
                        <div className='flex flex-col font-semibold text-lg'>
                            <p className='text-white'>p</p>
                            <p className='text-black mt-40 mb-30'>A</p>
                            <p className='text-black'>B</p>
                        </div>
                        <div className='bg-white w-1/3 text-sm'>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)] '>Lagos State . 1 870 305 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Ogun State . 20 906 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Abuja (FCT) . 226 914 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Oyo State . 58 684 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>River State . 110 748 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Abia State . 5 784 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Adamawa State . 1 064 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Akwa Ibom State . 5 002 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Anambra State . 18 259 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Bauchi State . 882 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Bayelsa State . 1 655 Ads</div>
                            <div className='p-2'>Benue State . 2 357 Ads</div>
                        </div>
                        <div className='flex flex-col items-center font-semibold text-lg'>
                            <p className='text-black mt-1 mb-2'>C</p>
                            <p className='text-black mb-2.5'>D</p>
                            <p className='text-black'>E</p>
                            <p className='text-black mt-30 mb-2'>G</p>
                            <p className='text-black mb-2.5'>I</p>
                            <p className='text-black mb-2'>J</p>
                            <p className='text-black'>K</p>
                        </div>
                        <div className='bg-white w-1/3 text-sm'>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)] '>Cross River State . 1 870 305 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Delta State . 20 906 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Ebonyi State . 226 914 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Edo State . 58 684 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Ekiti State . 110 748 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Enugu State . 5 784 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Gombe State . 1 064 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Imo State . 5 002 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Jigawa State . 18 259 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Kaduna State . 882 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Kano State . 1 655 Ads</div>
                            <div className='p-2'>Katsina State . 2 357 Ads</div>
                        </div>
                        <div className='flex flex-col items-center font-semibold text-lg'>
                            <p className='text-black mt-19.5 mb-11.5'>N</p>
                            <p className='text-black mb-11.5'>O</p>
                            <p className='text-black'>P</p>
                            <p className='text-black mt-2 mb-2.5'>S</p>
                            <p className='text-black mb-2.5'>T</p>
                            <p className='text-black mb-2'>Y</p>
                            <p className='text-black'>Z</p>
                        </div>
                        <div className='bg-white w-1/3 text-sm'>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)] '>Kogi State . 1 279 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Kwara State . 8 557 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Nasawara State . 1 188 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Niger State . 1 372 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Ondo State . 6 311 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Osun State . 13 425 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Plateau State . 2 698 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Sokoto State . 809 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Taraba State . 459 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Yobe State . 302 Ads</div>
                            <div className='p-2 border-b-1 border-[var(--color-searchbg)]'>Zamfara State . 260 Ads</div>                        </div>
                    </div>
                </div> : ""}
                <div className='relative'>
                    <input type='text' placeholder='I am looking for...' className='p-3 pr-20 bg-white rounded-xl font-medium text-gray-900 w-100 focus:outline-0 focus:text-black focus:font-normal' />
                    <div className='absolute top-3 right-3'><IoSearchSharp color='grey' size={23} /></div>
                </div>
            </div>
        </section>
    )
}

export default Search
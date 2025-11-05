import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaThList } from 'react-icons/fa'
import { IoAppsSharp } from 'react-icons/io5'

const Hero = () => {
    const [products, setProducts] = useState([])
    const [grid, setGrid] = useState(true)
    const [flex, setFlex] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/products")
                setProducts(res.data.products)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <section className='font-jiji flex flex-col w-6/10 ml-97 mt-10 gap-5'>
            <div className='flex gap-2'>
                <div className='relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-green-50 border-green-600'>
                    <div className='absolute -top-5'>
                        <img src='https://pictures-nigeria.jijistatic.net/JIJI-13466/c5e8e8d0f40140e5b30b1d94531f5635' alt='job_application' className='w-20' />
                    </div>
                    <p className='font-semibold'>Apply for job</p>
                </div>
                <div className='relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-green-50 border-green-600'>
                    <div className='absolute -top-5'>
                        <img src='https://pictures-nigeria.jijistatic.net/JIJI-13466/00ec10cf39db451d989f275696984af3' alt='Sell' className='w-20' />
                    </div>
                    <p className='font-semibold'>How to sell</p>
                </div>
                <div className='relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-blue-50 border-blue-600'>
                    <div className='absolute -top-5'>
                        <img src='https://pictures-nigeria.jijistatic.net/JIJI-13466/aba63e8606974d75926f0c339ca9ce0e' alt='Buy' className='w-20' />
                    </div>
                    <p className='font-semibold'>How to buy</p>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>Recommended for you</h1>
                <div className='flex gap-2'>
                    <div className='flex flex-col gap-2'>
                        <img src='/assets/mobile phones.jpg' alt='Mobile Phones' className='w-35 h-40 rounded-xl' />
                        <p>Mobile Phones</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src='/assets/Bags.jpg' alt='Bags' className='w-35 h-40 rounded-xl' />
                        <p>Bags</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src='/assets/Shoes.jpg' alt='Shoes' className='w-35 h-40 rounded-xl' />
                        <p>Shoes</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src='public/assets/Houses & Apartments.jpg' alt='House & Apartments' className='w-35 h-40 rounded-xl' />
                        <p className='text-sm'>House & Apartment for rent</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src='/assets/Laptop & Computer.jpg' alt='Laptop & Computer' className='w-35 h-40 rounded-xl' />
                        <p className='text-sm'>Laptops & Computers</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img src='/assets/Smoking accessories.jpg' alt='Smoking Accessories' className='w-35 h-40 rounded-xl' />
                        <p className='text-sm'>Smoking Accessories</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-semibold'>Trending ads</h1>
                    <div className='flex items-center gap-2'>
                        <div onClick={()=>{setFlex(false),setGrid(true)}}>
                            <IoAppsSharp color='grey' size={20} />
                        </div>
                        <div onClick={() => { setFlex(true),setGrid(false)}}>
                            <FaThList color='grey' size={18} />
                        </div>
                    </div>
                </div>
                {flex ? <div className='flex flex-col gap-2'>
                    {products.map((product, index) => (
                        <div key={index} className='flex items-center rounded-xl p-4 border-2 border-primary gap-2'>
                            <img alt={product.title} src={product.images[0]} className='w-45' />
                            <div className='flex flex-col gap-3'>
                                <div className='text-2xl font-semibold'>{product.title}</div>
                                <div className='text-gray-600'>{product.description}</div>
                                <div className='text-xl font-semibold'>$ {product.price}</div>
                            </div>
                        </div>
                    )
                    )}
                </div> : ""}

                {grid ? <div className='grid grid-cols-3 gap-2'>
                    {products.map((product, index) => (
                        <div key={index} className='flex flex-col items-center rounded-xl p-4 border-2 border-primary gap-3'>
                            <img alt={product.title} src={product.images[0]} className='w-30' />
                            <div className='text-center text-xl font-semibold'>{product.title}</div>
                            <div className='text-center text-gray-600'>{product.description}</div>
                            <div className='text-xl font-semibold'>$ {product.price}</div>
                        </div>

                    )
                    )}
                </div> : ""}

            </div>
        </section >
    )
}

export default Hero
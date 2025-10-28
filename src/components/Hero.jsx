import React from 'react'

const Hero = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
    return (
        <section className='flex justify-end'>
            <div className='grid grid-cols-4 bg-white h-500 w-6/10 mr-30'>
            <div className='w-1/4 h-20 bg-red-500'>Hero 1 <span>red</span> </div>
            <div className='w-1/4 h-20 bg-blue-500'>Hero 2 <span>blue</span></div>
            <div className='w-1/4 h-20 bg-green-500'>Hero 3 <span>green</span></div>
            <div className='w-1/4 h-20 bg-yellow-500'>Hero 4 <span>yellow</span></div>
            </div>
        </section>
    )
}

export default Hero
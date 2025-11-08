import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaThList } from 'react-icons/fa'
import { IoAppsSharp } from 'react-icons/io5'
import { HeroData } from '../constant/data'

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
    <section className="font-jiji flex flex-col lg:w-6/10 px-5 lg:px-0 lg:ml-97 mt-10 gap-5">
      <div className="flex gap-2">
        <div className="relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-green-50 border-green-600">
          <div className="absolute -top-5">
            <img
              src="https://pictures-nigeria.jijistatic.net/JIJI-13466/c5e8e8d0f40140e5b30b1d94531f5635"
              alt="job_application"
              className="w-20"
            />
          </div>
          <p className="font-semibold">Apply for job</p>
        </div>
        <div className="relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-green-50 border-green-600">
          <div className="absolute -top-5">
            <img
              src="https://pictures-nigeria.jijistatic.net/JIJI-13466/00ec10cf39db451d989f275696984af3"
              alt="Sell"
              className="w-20"
            />
          </div>
          <p className="font-semibold">How to sell</p>
        </div>
        <div className="relative w-50 pl-4 pt-17 pb-2 border-1 rounded-lg bg-blue-50 border-blue-600">
          <div className="absolute -top-5">
            <img
              src="https://pictures-nigeria.jijistatic.net/JIJI-13466/aba63e8606974d75926f0c339ca9ce0e"
              alt="Buy"
              className="w-20"
            />
          </div>
          <p className="font-semibold">How to buy</p>
        </div>
      </div>
      {/* RECOMMENDATION */}
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">Recommended for you</h1>

        <div className="flex gap-2 overflow-x-scroll">
          {HeroData.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className='w-40 lg:w-fit'>
                <img
                  src={item.src}
                  alt={item.id}
                  className="w-40 h-45 lg:w-35 lg:h-45 rounded-xl"
                />
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Trending */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Trending ads</h1>
          {/* Trending flex/grid view green upon selection */}
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                setFlex(false);
                setGrid(true);
              }}
              className="cursor-pointer"
            >
              <IoAppsSharp size={20} color={grid ? "#16a34a" : "grey"} />
            </div>
            <div
              onClick={() => {
                setFlex(true);
                setGrid(false);
              }}
              className="cursor-pointer"
            >
              <FaThList size={18} color={flex ? "#16a34a" : "grey"} />
            </div>
          </div>
        </div>

        {/* Trending flex view */}
        {flex ? (
          <div className="flex flex-col gap-2">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center rounded-xl p-2 lg:p-4 bg-white gap-2 scale-100 hover:scale-101 transition-transform duration-500 cursor-pointer"
              >
                <img
                  alt={product.title}
                  src={product.images[0]}
                  className="w-45"
                />

                {/* Laptop View */}
                <div className="hidden lg:flex flex-col gap-3">
                  <div className="flex justify-between">
                    <div className="text-lg lg:text-2xl font-semibold">
                      {product.title}
                    </div>
                    <div className="text-xl font-semibold text-primary">
                      $ {product.price}
                    </div>
                  </div>
                  <div className="text-gray-600">{product.description}</div>
                </div>

                {/* Mobile View */}
                <div className="flex lg:hidden flex-col gap-3">
                  <div className="text-lg lg:text-2xl font-semibold">
                    {product.title}
                  </div>
                  <div className="text-sm text-gray-600">{product.description}</div>
                  <div className="text-xl font-semibold text-primary">
                    $ {product.price}
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* Trending grid view */}
        {grid ? (
          <div className="columns-2 lg:columns-3 gap-3 lg:gap-3 pb-7 p-2 lg:p-4">
            {products.map((product, index) => (
              <div
                key={index}
                className=" break-inside-avoid flex flex-col bg-white mb-3 lg:items-center rounded-xl p-2 lg:p-4 border-2 border-primary hover:border-[#fea03c] gap-3 scale-100 hover:scale-101 transition-transform duration-500 cursor-pointer"
              >
                <img
                  alt={product.title}
                  src={product.images[0]}
                  className="w-45"
                />
                <div className="lg:text-xl font-semibold text-primary">
                  $ {product.price}
                </div>
                <div className="lg:text-center text-lg lg:text-xl font-semibold">
                  {product.title}
                </div>
                <div className="lg:text-center text-sm text-gray-600">
                  {product.description}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Hero
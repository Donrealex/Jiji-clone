import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoSearchSharp } from 'react-icons/io5'

const Search = () => {
    const [allnigeria, setAllnigeria] = useState(false)
    return (
      <section className=" flex flex-col items-center justify-center gap-5 bg-primary pt-35 pb-20 rounded-b-3xl mb-1000">
        <h1 className="text-white text-2xl font-semibold">
          What are you looking for?
        </h1>
        <div className="flex items-center gap-5">
          <div
            onClick={() => {
              setAllnigeria(!allnigeria);
            }}
            className="flex items-center cursor-pointer justify-center p-3 bg-white rounded-xl text-gray-500 font-medium"
          >
            All Nigeria <IoMdArrowDropdown color="grey" size={25} />
          </div>
          {allnigeria ? (
            <div className="absolute flex flex-col top-25 w-5/7 left-50 z-40 h-130 bg-searchbg rounded-xl">
              <p
                onClick={() => {
                  setAllnigeria(!allnigeria);
                }}
                className="absolute right-3 cursor-pointer font-semibold text-lg"
              >
                X
              </p>
              <div className="flex items-center justify-between px-10 py-3">
                <p>
                  All Nigeria{" "}
                  <span className="text-gray-500">&#8226; 2 456 660 Ads</span>
                </p>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Find state, city or district....."
                    className="py-3 pl-3 w-70 pr-10 bg-white rounded-xl text-gray-900 focus:outline-0 focus:font-normal"
                  />
                  <div className="absolute top-3 right-3">
                    <IoSearchSharp color="grey" size={23} />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 px-2 pr-3 pb-3 overflow-y-auto">
                <div className="flex flex-col font-semibold text-lg">
                  <p className="text-white">p</p>
                  <p className="text-black mt-40 mb-30">A</p>
                  <p className="text-black">B</p>
                </div>
                <div className="bg-white w-1/3 text-sm">
                  {[
                    { state: "Lagos State", ads: "1 870 305" },
                    { state: "Ogun State", ads: "20 906" },
                    { state: "Abuja (FCT)", ads: "226 914" },
                    { state: "Oyo State", ads: "58 684" },
                    { state: "Rivers State", ads: "110 748" },
                    { state: "Abia State", ads: "5 784" },
                    { state: "Adamawa State", ads: "1 064" },
                    { state: "Akwa Ibom State", ads: "5 002" },
                    { state: "Anambra State", ads: "18 259" },
                    { state: "Bauchi State", ads: "882" },
                    { state: "Bayelsa State", ads: "1 655" },
                    { state: "Benue State", ads: "2 357" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-2 border-b border-searchbg group flex items-center gap-1"
                    >
                      {/* color when ads number is hovered */}
                      <span className="group-hover:text-primary hover:cursor-pointer">
                        {item.state}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="hover:cursor-pointer text-gray-400">
                        {item.ads} Ads
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center font-semibold text-lg">
                  <p className="text-black mt-1 mb-2">C</p>
                  <p className="text-black mb-2.5">D</p>
                  <p className="text-black">E</p>
                  <p className="text-black mt-30 mb-2">G</p>
                  <p className="text-black mb-2.5">I</p>
                  <p className="text-black mb-2">J</p>
                  <p className="text-black">K</p>
                </div>
                <div className="bg-white w-1/3 text-sm">
                  {[
                    { state: "Cross River State", ads: "1 870 305" },
                    { state: "Delta State", ads: "20 906" },
                    { state: "Ebonyi State", ads: "226 914" },
                    { state: "Edo State", ads: "58 684" },
                    { state: "Ekiti State", ads: "110 748" },
                    { state: "Enugu State", ads: "5 784" },
                    { state: "Gombe State", ads: "1 064" },
                    { state: "Imo State", ads: "5 002" },
                    { state: "Jigawa State", ads: "18 259" },
                    { state: "Kaduna State", ads: "882" },
                    { state: "Kano State", ads: "1 655" },
                    { state: "Katsina State", ads: "2 357" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-2 border-b border-searchbg group flex items-center gap-1"
                    >
                      {/* color when ads number is hovered */}
                      <span className="group-hover:text-primary hover:cursor-pointer">
                        {item.state}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="hover:cursor-pointer text-gray-400">
                        {item.ads} Ads
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center font-semibold text-lg">
                  <p className="text-black mt-19.5 mb-11.5">N</p>
                  <p className="text-black mb-11.5">O</p>
                  <p className="text-black">P</p>
                  <p className="text-black mt-2 mb-2.5">S</p>
                  <p className="text-black mb-2.5">T</p>
                  <p className="text-black mb-2">Y</p>
                  <p className="text-black">Z</p>
                </div>

                <div className="bg-white w-1/3 text-sm">
                  {[
                    { state: "Kogi State", ads: "1 279" },
                    { state: "Kwara State", ads: "8 557" },
                    { state: "Nasarawa State", ads: "1 188" },
                    { state: "Niger State", ads: "1 372" },
                    { state: "Ondo State", ads: "6 311" },
                    { state: "Osun State", ads: "13 425" },
                    { state: "Plateau State", ads: "2 698" },
                    { state: "Sokoto State", ads: "809" },
                    { state: "Taraba State", ads: "459" },
                    { state: "Yobe State", ads: "302" },
                    { state: "Zamfara State", ads: "260" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-2 border-b border-searchbg flex items-center gap-1"
                    >
                      {/*color when ads number is hovered */}
                      <span className="group-hover:text-primary hover:cursor-pointer">
                        {item.state}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="hover:cursor-pointer text-gray-400">
                        {item.ads} Ads
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="relative">
            <input
              type="text"
              placeholder="I am looking for..."
              className="p-3 pr-20 bg-white rounded-xl font-medium text-gray-900 w-100 focus:outline-0 focus:text-black focus:font-normal"
            />
            <div className="absolute top-3 right-3">
              <IoSearchSharp color="grey" size={23} />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Search
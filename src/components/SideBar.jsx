import React, { useState } from 'react'
import { propertyData, vehicleData, phoneData, electronicsData,HomeData, FashionData, BeautyData, ServiceData } from '../constant/data'

const SideBar = ({ style }) => {
  const [isVehicleHovered, setIsVehicleHovered] = useState(false)
  const [isPropertyHovered, setIsPropertyHovered] = useState(false)
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)
  const [isElectronicsHovered, setIsElectronicsHovered] = useState(false)
  const [isHomeHovered, setIsHomeHovered] = useState(false)
  const [isFashionHovered, setIsFashionHovered] = useState(false)
  const [isBeautyHovered, setIsBeautyHovered] = useState(false)
  const [isServiceHovered, setIsServiceHovered] = useState(false)

  return (
    <section className={`${style} font-jiji`}>
      <div>
        {isVehicleHovered ? (
          <div
            onMouseEnter={() => {
              setIsVehicleHovered(true);
            }}
            onMouseLeave={() => {
              setIsVehicleHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isVehicleHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {vehicleData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isPropertyHovered ? (
          <div
            onMouseEnter={() => {
              setIsPropertyHovered(true);
            }}
            onMouseLeave={() => {
              setIsPropertyHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isPropertyHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {propertyData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isPhoneHovered ? (
          <div
            onMouseEnter={() => {
              setIsPhoneHovered(true);
            }}
            onMouseLeave={() => {
              setIsPhoneHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isPhoneHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {phoneData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isElectronicsHovered ? (
          <div
            onMouseEnter={() => {
              setIsElectronicsHovered(true);
            }}
            onMouseLeave={() => {
              setIsElectronicsHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isElectronicsHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {electronicsData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isHomeHovered ? (
          <div
            onMouseEnter={() => {
              setIsHomeHovered(true);
            }}
            onMouseLeave={() => {
              setIsHomeHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isHomeHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {HomeData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isFashionHovered ? (
          <div
            onMouseEnter={() => {
              setIsFashionHovered(true);
            }}
            onMouseLeave={() => {
              setIsFashionHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isFashionHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {FashionData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isBeautyHovered ? (
          <div
            onMouseEnter={() => {
              setIsBeautyHovered(true);
            }}
            onMouseLeave={() => {
              setIsBeautyHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isBeautyHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {BeautyData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-8 h-8 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {isServiceHovered ? (
          <div
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isServiceHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {ServiceData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img src={item.img} alt="car" className="w-10 h-10 mr-2" />
                <div className="flex flex-col">
                  <h1 className="flex-1">{item.contents}</h1>
                  <p className="text-gray-400">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="absolute overflow-y-scroll top-10 h-120 left-30 flex flex-col bg-white rounded-lg transition-all duration-300">
        <div
          onMouseEnter={() => {
            setIsVehicleHovered(true);
          }}
          onMouseLeave={() => {
            setIsVehicleHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/cars.png"
            alt="Cars"
            className="w-8 h-8 mr-3"
          />
          <div>
            Vehicles
            <p className="text-gray-400">323,342 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsPropertyHovered(true);
          }}
          onMouseLeave={() => {
            setIsPropertyHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/house.png"
            alt="Property"
            className="w-8 h-8 mr-3"
          />
          <div>
            Property
            <p className="text-gray-400">243,342 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsPhoneHovered(true);
          }}
          onMouseLeave={() => {
            setIsPhoneHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/phones.png"
            alt="Mobile Phones"
            className="w-8 h-8 mr-3"
          />
          <div>
            Mobile Phones and Tablet
            <p className="text-gray-400">101,442 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsElectronicsHovered(true);
          }}
          onMouseLeave={() => {
            setIsElectronicsHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/laptops.png"
            alt="Electronics"
            className="w-8 h-8 mr-3"
          />
          <div>
            Electronics
            <p className="text-gray-400">271,442 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsHomeHovered(true);
          }}
          onMouseLeave={() => {
            setIsHomeHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/furniture.png"
            alt="Home, Furniture and Appliances"
            className="w-8 h-8 mr-3"
          />
          <div>
            Home, Furniture and Appliances
            <p className="text-gray-400">585,342 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsFashionHovered(true);
          }}
          onMouseLeave={() => {
            setIsFashionHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/womenRed.png"
            alt="Fashion"
            className="w-8 h-8 mr-3"
          />
          <div>
            Fashion
            <p className="text-gray-400">170,302 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsBeautyHovered(true);
          }}
          onMouseLeave={() => {
            setIsBeautyHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/body.png"
            alt="Beauty"
            className="w-8 h-8 mr-3"
          />
          <div>
            Beauty and Personal Care
            <p className="text-gray-400">76,942 ads</p>
          </div>
        </div>
        <div
          onMouseEnter={() => {
            setIsServiceHovered(true);
          }}
          onMouseLeave={() => {
            setIsServiceHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/settings.png"
            alt="Services"
            className="w-8 h-8 mr-3"
          />
          <div>
            Services
            <p className="text-gray-400">90,142 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/repairCap.png"
            alt="Repair & Construction"
            className="w-8 h-8 mr-3"
          />
          <div>
            Repair & Construction
            <p className="text-gray-400">371,142 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/equipm.png"
            alt="Commercial Equipment and Tools"
            className="w-8 h-8 mr-3"
          />
          <div>
            Commercial Equipment and Tools
            <p className="text-gray-400">176,342 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
          src="public/assets/sport.png"
            alt="Leisure and Activities"
            className="w-8 h-8 mr-3"
          />
          <div>
            Leisure and Activities
            <p className="text-gray-400">87,440 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/teddy.png"
            alt="Babies and Kids"
            className="w-8 h-8 mr-3"
          />
          <div>
            Babies and Kids
            <p className="text-gray-400">30,342 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/food.png"
            alt="Food, Agriculture and Farming"
            className="w-8 h-8 mr-3"
          />
          <div>
            Food, Agriculture and Farming
            <p className="text-gray-400">31,302 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/animals.png"
            alt="Animals and Pets"
            className="w-8 h-8 mr-3"
          />
          <div>
            Animals and Pets
            <p className="text-gray-400">11,302 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/jobs.png"
            alt="Jobs"
            className="w-8 h-8 mr-3"
          />
          <div>
            Jobs
            <p className="text-gray-400">1,962 ads</p>
          </div>
        </div>
        <div className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex">
          <img
            src="public/assets/work.png"
            alt="Seeking Work-CVs"
            className="w-8 h-8 mr-3"
          />
          <div>
            Seeking Work-CVs
            <p className="text-gray-400">19,962 ads</p>
          </div>
        </div>
      </div>
    </section>
  );

}


export default SideBar;
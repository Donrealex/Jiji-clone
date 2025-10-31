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
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer"
        >
          {" "}
          Vehicles
        </div>
        <div
          onMouseEnter={() => {
            setIsPropertyHovered(true);
          }}
          onMouseLeave={() => {
            setIsPropertyHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Property
        </div>
        <div
          onMouseEnter={() => {
            setIsPhoneHovered(true);
          }}
          onMouseLeave={() => {
            setIsPhoneHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Mobile Phones and Tablet
        </div>
        <div
          onMouseEnter={() => {
            setIsElectronicsHovered(true);
          }}
          onMouseLeave={() => {
            setIsElectronicsHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Electronics
        </div>
        <div
          onMouseEnter={() => {
            setIsHomeHovered(true);
          }}
          onMouseLeave={() => {
            setIsHomeHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Home, Furniture and Appliances
        </div>
        <div
          onMouseEnter={() => {
            setIsFashionHovered(true);
          }}
          onMouseLeave={() => {
            setIsFashionHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Fashion
        </div>
        <div
          onMouseEnter={() => {
            setIsBeautyHovered(true);
          }}
          onMouseLeave={() => {
            setIsBeautyHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Beauty and Personal Care
        </div>
        <div
          onMouseEnter={() => {
            setIsServiceHovered(true);
          }}
          onMouseLeave={() => {
            setIsServiceHovered(true);
          }}
          className="p-2 border-b-1 border-searchbg"
        >
          Services
        </div>
        <div className="p-2 border-b-1 border-searchbg">
          Commercial Equipment and Tools
        </div>
        <div className="p-2 border-b-1 border-searchbg">
          Leisure and Activities
        </div>
        <div className="p-2 border-b-1 border-searchbg">Babies and Kids</div>
        <div className="p-2 border-b-1 border-searchbg">
          Food, Agriculture and Farming
        </div>
        <div className="p-2 border-b-1 border-searchbg">Animals and Pets</div>
        <div className="p-2 border-b-1 border-searchbg">Jobs</div>
        <div className="p-2 border-b-1 border-searchbg">Seeking Work-CVs</div>
      </div>
    </section>
  );

}


export default SideBar
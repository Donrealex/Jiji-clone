import React, { useState } from 'react'
import { propertyData, vehicleData, phoneData, 
  electronicsData, HomeData, FashionData, 
  BeautyData, ServiceData, repairData, 
  commercialData, leisureData, babiesData, 
  foodData, animalData, jobsData, seekingWorkData } from '../constant/data'

const SideBar = ({ style }) => {
  const [isVehicleHovered, setIsVehicleHovered] = useState(false)
  const [isPropertyHovered, setIsPropertyHovered] = useState(false)
  const [isPhoneHovered, setIsPhoneHovered] = useState(false)
  const [isElectronicsHovered, setIsElectronicsHovered] = useState(false)
  const [isHomeHovered, setIsHomeHovered] = useState(false)
  const [isFashionHovered, setIsFashionHovered] = useState(false)
  const [isBeautyHovered, setIsBeautyHovered] = useState(false)
  const [isServiceHovered, setIsServiceHovered] = useState(false)
  const [isRepairHovered, setIsRepairHovered] = useState(false)
  const [isCommercialHovered, setIsCommercialHovered] = useState(false)
  const [isLeisureHovered, setIsLeisureHovered] = useState(false)
  const [isBabiesHovered, setIsBabiesHovered] = useState(false)
  const [isFoodHovered, setIsFoodHovered] = useState(false)
  const [isAnimalHovered, setIsAnimalHovered] = useState(false)
  const [isJobsHovered, setIsJobsHovered] = useState(false)
  const [isSeekingworkHovered, setIsSeekingworkHovered] = useState(false)

  return (
    <section className={`${style} font-jiji text-sm`}>
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
            onMouseEnter={() => {
              setIsServiceHovered(true);
            }}
            onMouseLeave={() => {
              setIsServiceHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isServiceHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {ServiceData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isRepairHovered ? (
          <div
            onMouseEnter={() => {
              setIsRepairHovered(true);
            }}
            onMouseLeave={() => {
              setIsRepairHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isRepairHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {repairData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isCommercialHovered ? (
          <div
            onMouseEnter={() => {
              setIsCommercialHovered(true);
            }}
            onMouseLeave={() => {
              setIsCommercialHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isCommercialHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {commercialData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isLeisureHovered ? (
          <div
            onMouseEnter={() => {
              setIsLeisureHovered(true);
            }}
            onMouseLeave={() => {
              setIsLeisureHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isLeisureHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {leisureData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isBabiesHovered ? (
          <div
            onMouseEnter={() => {
              setIsBabiesHovered(true);
            }}
            onMouseLeave={() => {
              setIsBabiesHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isBabiesHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {babiesData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isFoodHovered ? (
          <div
            onMouseEnter={() => {
              setIsFoodHovered(true);
            }}
            onMouseLeave={() => {
              setIsFoodHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isFoodHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {foodData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isAnimalHovered ? (
          <div
            onMouseEnter={() => {
              setIsAnimalHovered(true);
            }}
            onMouseLeave={() => {
              setIsAnimalHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isAnimalHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {animalData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
                <img
                  src={item.img}
                  alt="car"
                  className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                />
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
        {isJobsHovered ? (
          <div
            onMouseEnter={() => {
              setIsJobsHovered(true);
            }}
            onMouseLeave={() => {
              setIsJobsHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isJobsHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {jobsData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
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
        {isSeekingworkHovered ? (
          <div
            onMouseEnter={() => {
              setIsSeekingworkHovered(true);
            }}
            onMouseLeave={() => {
              setIsSeekingworkHovered(false);
            }}
            className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${
              isSeekingworkHovered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {seekingWorkData.map((item) => (
              <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
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
       {/* vehicle */}
        <div
          onMouseEnter={() => {
            setIsVehicleHovered(true);
          }}
          onMouseLeave={() => {
            setIsVehicleHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex "
        >
          <img
            src="public/assets/cars.png"
            alt="Cars"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div className="grid ">
            Vehicles
            <p className="text-gray-400">323,342 ads</p>
          </div>
        </div>
        {/* property */}
        <div
          onMouseEnter={() => {
            setIsPropertyHovered(true);
          }}
          onMouseLeave={() => {
            setIsPropertyHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/house.png"
            alt="Property"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Property
            <p className="text-gray-400">243,342 ads</p>
          </div>
        </div>
        {/* mobile phone & tablets */}
        <div
          onMouseEnter={() => {
            setIsPhoneHovered(true);
          }}
          onMouseLeave={() => {
            setIsPhoneHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/phones.png"
            alt="Mobile Phones"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Mobile Phones and Tablet
            <p className="text-gray-400">101,442 ads</p>
          </div>
        </div>
        {/* electronics */}
        <div
          onMouseEnter={() => {
            setIsElectronicsHovered(true);
          }}
          onMouseLeave={() => {
            setIsElectronicsHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/laptops.png"
            alt="Electronics"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Electronics
            <p className="text-gray-400">271,442 ads</p>
          </div>
        </div>
        {/* Home & furniture */}
        <div
          onMouseEnter={() => {
            setIsHomeHovered(true);
          }}
          onMouseLeave={() => {
            setIsHomeHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/furniture.png"
            alt="Home, Furniture and Appliances"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Home, Furniture and Appliances
            <p className="text-gray-400">585,342 ads</p>
          </div>
        </div>
        {/* fashion */}
        <div
          onMouseEnter={() => {
            setIsFashionHovered(true);
          }}
          onMouseLeave={() => {
            setIsFashionHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/womenRed.png"
            alt="Fashion"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Fashion
            <p className="text-gray-400">170,302 ads</p>
          </div>
        </div>
        {/* Beauty */}
        <div
          onMouseEnter={() => {
            setIsBeautyHovered(true);
          }}
          onMouseLeave={() => {
            setIsBeautyHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/body.png"
            alt="Beauty"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Beauty and Personal Care
            <p className="text-gray-400">76,942 ads</p>
          </div>
        </div>
        {/* service */}
        <div
          onMouseEnter={() => {
            setIsServiceHovered(true);
          }}
          onMouseLeave={() => {
            setIsServiceHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/settings.png"
            alt="Services"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Services
            <p className="text-gray-400">90,142 ads</p>
          </div>
        </div>
        {/* repair */}
        <div
          onMouseEnter={() => {
            setIsRepairHovered(true);
          }}
          onMouseLeave={() => {
            setIsRepairHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/repairCap.png"
            alt="Repair & Construction"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Repair & Construction
            <p className="text-gray-400">371,142 ads</p>
          </div>
        </div>
        {/* commercial */}
        <div
          onMouseEnter={() => {
            setIsCommercialHovered(true);
          }}
          onMouseLeave={() => {
            setIsCommercialHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/equipm.png"
            alt="Commercial Equipment and Tools"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Commercial Equipment and Tools
            <p className="text-gray-400">176,342 ads</p>
          </div>
        </div>
        {/* leasure */}
        <div
          onMouseEnter={() => {
            setIsLeisureHovered(true);
          }}
          onMouseLeave={() => {
            setIsLeisureHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/sport.png"
            alt="Leisure and Activities"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Leisure and Activities
            <p className="text-gray-400">87,440 ads</p>
          </div>
        </div>
        {/* Babies */}
        <div
          onMouseEnter={() => {
            setIsBabiesHovered(true);
          }}
          onMouseLeave={() => {
            setIsBabiesHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/teddy.png"
            alt="Babies and Kids"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Babies and Kids
            <p className="text-gray-400">30,342 ads</p>
          </div>
        </div>
        {/* food */}
        <div
          onMouseEnter={() => {
            setIsFoodHovered(true);
          }}
          onMouseLeave={() => {
            setIsFoodHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/food.png"
            alt="Food, Agriculture and Farming"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Food, Agriculture and Farming
            <p className="text-gray-400">31,302 ads</p>
          </div>
        </div>
        {/* animal */}
        <div
          onMouseEnter={() => {
            setIsAnimalHovered(true);
          }}
          onMouseLeave={() => {
            setIsAnimalHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/animals.png"
            alt="Animals and Pets"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Animals and Pets
            <p className="text-gray-400">11,302 ads</p>
          </div>
        </div>
        {/* job work */}
        <div
          onMouseEnter={() => {
            setIsJobsHovered(true);
          }}
          onMouseLeave={() => {
            setIsJobsHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/jobs.png"
            alt="Jobs"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
          />
          <div>
            Jobs
            <p className="text-gray-400">1,962 ads</p>
          </div>
        </div>
        {/* seeking work */}
        <div
          onMouseEnter={() => {
            setIsSeekingworkHovered(true);
          }}
          onMouseLeave={() => {
            setIsSeekingworkHovered(false);
          }}
          className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer flex"
        >
          <img
            src="public/assets/work.png"
            alt="Seeking Work-CVs"
            className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
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
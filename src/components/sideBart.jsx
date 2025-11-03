import React, { useState } from "react";
import {
  propertyData,
  vehicleData,
  phoneData,
  electronicsData,
  HomeData,
  FashionData,
  BeautyData,
  ServiceData,
  repairData,
  commercialData,
  leisureData,
  babiesData,
  foodData,
  animalData,
  jobsData,
  seekingWorkData,
} from "../constant/data";

const SideBart = ({ style }) => {
  const [active, setActive] = useState(null); // 'vehicles' | 'property' | ...

  const categories = [
    { key: "vehicles", label: "Vehicles", ads: "323,342 ads", icon: "public/assets/cars.png", data: vehicleData },
    { key: "property", label: "Property", ads: "243,342 ads", icon: "public/assets/house.png", data: propertyData },
    { key: "phones", label: "Mobile Phones and Tablet", ads: "101,442 ads", icon: "public/assets/phones.png", data: phoneData },
    { key: "electronics", label: "Electronics", ads: "271,442 ads", icon: "public/assets/laptops.png", data: electronicsData },
    { key: "home", label: "Home, Furniture and Appliances", ads: "585,342 ads", icon: "public/assets/furniture.png", data: HomeData },
    { key: "fashion", label: "Fashion", ads: "170,302 ads", icon: "public/assets/womenRed.png", data: FashionData },
    { key: "beauty", label: "Beauty and Personal Care", ads: "76,942 ads", icon: "public/assets/body.png", data: BeautyData },
    { key: "services", label: "Services", ads: "90,142 ads", icon: "public/assets/settings.png", data: ServiceData },
    { key: "repair", label: "Repair & Construction", ads: "371,142 ads", icon: "public/assets/repairCap.png", data: repairData },
    { key: "commercial", label: "Commercial Equipment and Tools", ads: "176,342 ads", icon: "public/assets/equipm.png", data: commercialData },
    { key: "leisure", label: "Leisure and Activities", ads: "87,440 ads", icon: "public/assets/sport.png", data: leisureData },
    { key: "babies", label: "Babies and Kids", ads: "30,342 ads", icon: "public/assets/teddy.png", data: babiesData },
    { key: "food", label: "Food, Agriculture and Farming", ads: "31,302 ads", icon: "public/assets/food.png", data: foodData },
    { key: "animals", label: "Animals and Pets", ads: "11,302 ads", icon: "public/assets/animals.png", data: animalData },
    { key: "jobs", label: "Jobs", ads: "1,962 ads", icon: "public/assets/jobs.png", data: jobsData },
    { key: "seeking", label: "Seeking Work-CVs", ads: "19,962 ads", icon: "public/assets/work.png", data: seekingWorkData },
  ];

  const activeCat = categories.find((c) => c.key === active);

  return (
    <section className={`${style} font-jiji text-sm`}>
      {/* Mega menu wrapper: includes both the left list and the right panel hit area */}
      <div
        className="relative inline-block pr-[25rem]" // reserve hover area for the right panel
        onMouseLeave={() => setActive(null)} // close only when leaving the whole area
      >
        {/* Left column */}
        <div className="relative w-72 bg-white rounded-lg overflow-y-scroll h-120 shadow">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="p-2 border-b border-searchbg cursor-pointer flex"
              onMouseEnter={() => setActive(cat.key)}
            >
              <img
                src={cat.icon}
                alt={cat.label}
                className="w-8 h-8 mr-3 bg-gray-200 rounded-lg"
              />
              <div className="grid">
                {cat.label}
                <p className="text-gray-400">{cat.ads}</p>
              </div>
            </div>
          ))}

          {/* Right panel: positioned relative to left column */}
          <div
            className={`
              absolute top-0 left-full ml-2 z-50 w-96 h-120
              rounded-lg overflow-y-scroll bg-white shadow-md
              transition-all duration-150 ease-out origin-left
              ${activeCat ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
              before:content-[''] before:absolute before:top-0 before:-left-2 before:w-2 before:h-full
            `}
          >
            {activeCat &&
              activeCat.data.map((item, idx) => (
                <div
                  key={item.id ?? idx}
                  className="flex items-center border-b border-searchbg p-2 hover:bg-searchbg cursor-pointer"
                >
                  {item.img ? (
                    <img
                      src={item.img}
                      alt=""
                      className="w-8 h-8 mr-2 bg-gray-200 rounded-lg"
                    />
                  ) : null}
                  <div className="flex flex-col">
                    <h1 className="flex-1">{item.contents}</h1>
                    {item.num ? <p className="text-gray-400">{item.num}</p> : null}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBart;
import React, { useState } from 'react'
import { propertyData, vehicleData } from '../constant/data'

const SideBar = ({ style }) => {
  const [isVehicleHovered, setIsVehicleHovered] = useState(false)
  const [isPropertyHovered, setIsPropertyHovered] = useState(false)

  return (
    <section className={`${style} font-jiji`}>
      <div>
        {isVehicleHovered ? <div className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${isVehicleHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          {vehicleData.map((item) => (
            <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
              <img src={item.img} alt="car" className="w-10 h-10 mr-2" />
              <div className="flex flex-col">
                <h1 className="flex-1">{item.contents}</h1>
                <p className="text-gray-400">{item.num}</p>
              </div>
            </div>
          ))}
        </div> : ""}

        {isPropertyHovered ? <div className={`absolute top-10 h-120 z-40 left-95 rounded-lg overflow-y-scroll bg-white shadow-md transition-all duration-1000 ease-in ${isPropertyHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          {propertyData.map((item) => (
            <div className="flex items-center border-b-1 border-searchbg p-2 hover:bg-searchbg cursor-pointer">
              <img src={item.img} alt="car" className="w-10 h-10 mr-2" />
              <div className="flex flex-col">
                <h1 className="flex-1">{item.contents}</h1>
                <p className="text-gray-400">{item.num}</p>
              </div>
            </div>
          ))}
        </div> : ""}
      </div>


      <div className="absolute overflow-y-scroll top-10 h-120 left-30 flex flex-col bg-white rounded-lg transition-all duration-300">
        <div onMouseEnter={() => { setIsVehicleHovered(!isVehicleHovered) }} onMouseLeave={() => { setIsVehicleHovered(!isVehicleHovered) }} className="p-2 border-b-1 border-searchbg group-hover:flex cursor-pointer"> Vehicles</div>
        <div onMouseEnter={() => { setIsPropertyHovered(!isPropertyHovered) }} onMouseLeave={() => { setIsPropertyHovered(!isPropertyHovered) }} className="p-2 border-b-1 border-searchbg">Property</div>
        <div className="p-2 border-b-1 border-searchbg">
          Mobile Phones and Tablet
        </div>
        <div className="p-2 border-b-1 border-searchbg">Electronics</div>
        <div className="p-2 border-b-1 border-searchbg">
          Home, Furniture and Appliances
        </div>
        <div className="p-2 border-b-1 border-searchbg">Fashion</div>
        <div className="p-2 border-b-1 border-searchbg">
          Beauty and Personal Care
        </div>
        <div className="p-2 border-b-1 border-searchbg">Services</div>
        <div className="p-2 border-b-1 border-searchbg">
          Repair and Construction
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
  )

}


export default SideBar
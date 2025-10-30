import React from 'react'
import { vehicleData } from '../constant/data'

const SideBar = ({ style }) => {
  return (
    <section className={`${style} font-jiji`}>
      <div className="absolute top-10 h-120 p-2 left-95 -translate-x-1 mt-2 hidden cursor-pointer group-hover:flex group-hover:flex-col transition-all duration-1000 ease-in-out translate-y-1 group-hover:translate-y-0 bg-white rounded-md overflow-y-scroll">
        <div className="">
          {vehicleData.map((item) => (
            <div className="flex items-center p-2 hover:bg-searchbg cursor-pointer">
              <img src={item.img} alt="car" className="w-10 h-10 mr-2" />
              <div className="flex flex-col">
                <h1 className="flex-1">{item.contents}</h1>
                <p className="text-gray-400">{item.num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div  className="relative group" >
      <div className="absolute overflow-y-scroll top-10 h-120 left-30 flex flex-col bg-white rounded-lg">
        <div className="p-2 border-b-1 border-searchbg group-hoverflex cursor-pointer"> Vehicles</div>
        <div className="p-2 border-b-1 border-searchbg">Property</div>
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
      </div>
    </section>
  );
}

export default SideBar
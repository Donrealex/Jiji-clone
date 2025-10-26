import React from 'react'
import { FaUser } from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import { IoMdBookmark, IoMdSettings } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdMessage } from 'react-icons/md'
import Button from './Button'
import { LuLogOut, LuShoppingBasket } from 'react-icons/lu'
import { CgComment } from 'react-icons/cg'
import { RiBarChart2Fill } from 'react-icons/ri'


const NavBar = () => {
    return (
        <section className='flex items-center bg-primary p-2 justify-between px-30 border-b-1 border-b-gray-500'>
            <h1 className='text-white text-4xl font-bold'>Jiji</h1>

            <div className='flex items-center gap-5'>
                <div className='relative group p-1.5 bg-white rounded-full cursor-pointer'><a href='https://jiji.ng/profile/saved'><IoMdBookmark color='grey' size={25} /></a>
                    <span className='absolute text-sm top-10 -left-2 mt-2 hidden group-hover:block bg-gray-500 rounded-xl text-white px-2 whitespace-nowrap'>Saved</span>
                </div>
                <div className='relative group p-1.5 bg-white rounded-full cursor-pointer'><a href='https://jiji.ng/profile-messages'><MdMessage color='grey' size={25} /></a>
                    <span className='absolute text-sm rounded-xl top-10 -left-5 mt-2 hidden group-hover:block bg-gray-500 text-white px-2 whitespace-nowrap'>Messages</span>
                </div>
                <div className='relative group p-1.5 bg-white rounded-full cursor-pointer'><a href='https://jiji.ng/profile/notifications'><IoNotifications color='grey' size={25} /></a>
                    <span className='absolute text-sm rounded-xl top-10 -left-6 mt-2 hidden group-hover:block bg-gray-500 text-white px-2 whitespace-nowrap'>Notifications</span>
                </div>
                <div className='relative group p-1.5 bg-white rounded-full cursor-pointer'><a href='https://jiji.ng/profile/adverts'><ImNewspaper color='grey' size={25} /></a>
                    <span className='absolute text-sm rounded-xl top-10 -left-6 mt-2 hidden group-hover:block bg-gray-500 text-white px-2 whitespace-nowrap'>My Adverts</span>
                </div>
                <div className='relative group p-1.5 bg-gray-500 rounded-full border-1 border-white cursor-pointer'><FaUser color='white' size={25} />
                    <div className='absolute top-full left-0 -translate-x-1 mt-2 hidden cursor-pointer group-hover:flex group-hover:flex-col transition-all duration-1000 ease-in-out translate-y-1 group-hover:translate-y-0 bg-white rounded-md'>
                        <a href='https://jiji.ng/sellerpage-b51cy9mtT79pSsYBT0kKINfl'><div className='flex items-center border-b-1 hover:bg-gray-200 border-b-gray-300 px-5 py-3 gap-2 whitespace-nowrap rounded-t-md'><div><LuShoppingBasket size={25} /></div>My shop</div></a>
                        <a href='https://jiji.ng/profile/feedback'><div className='flex items-center border-b-1 hover:bg-gray-200 border-b-gray-300 px-5 py-3 gap-3 whitespace-nowrap'><div><CgComment size={25} /></div>Feedback</div></a>
                        <a href='https://jiji.ng/profile/statistics'><div className='flex items-center border-b-1 hover:bg-gray-200 border-b-gray-300 px-5 py-3 gap-3 whitespace-nowrap'><div><RiBarChart2Fill size={25} /></div>Performance</div></a>
                        <a href='https://jiji.ng/profile/settings'><div className='flex items-center border-b-1 hover:bg-gray-200 border-b-gray-300 px-5 py-3 gap-3 whitespace-nowrap'><div><IoMdSettings size={25} /></div>Settings</div></a>
                        <a href='https://jiji.ng/logout.html'><div className='flex items-center px-5 py-3  hover:bg-gray-200 gap-3 whitespace-nowrap rounded-b-md'><div><LuLogOut size={25} /></div>Log out</div></a>
                    </div>
                </div>
                <Button name="SELL" style={'px-10 bg-navbutton hover:bg-navbutton/90 text-white font-semibold cursor-pointer'} />
            </div>
        </section>
    )
}

export default NavBar
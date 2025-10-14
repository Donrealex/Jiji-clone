import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <section>
        <div className='w-full fixed z-50'>
            <NavBar />
        </div>
        <Search />
        
    </section>
  )
}

export default HomePage
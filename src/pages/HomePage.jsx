import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <section>
        <div className='w-full fixed z-50'>
            <NavBar />
        </div>
        <Search />
        <Footer />
       

    </section>
  )
}

export default HomePage
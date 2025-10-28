import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Hero from '../components/Hero'

const HomePage = () => {
    return (
      <section className="bg-[#f6f8fd]">
        <NavBar style={"w-full fixed z-50"} />
        <Search />
        <SideBar style={"sticky top-10"} />
        <Hero />
        <Footer />
      </section>
    );
}

export default HomePage
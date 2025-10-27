import React from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <section>
      <NavBar style={"w-full fixed z-50"} />
      <Search />
      <Footer />
    </section>
  );
}

export default HomePage
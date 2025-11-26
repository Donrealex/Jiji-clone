import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import Hero from '../components/Hero'

const HomePage = () => {
      const [footerVisible, setFooterVisible] = useState(false);

      useEffect(() => {
        const footer = document.getElementById("footer");
        if (!footer) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setFooterVisible(entry.isIntersecting);
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(footer);
        return () => observer.disconnect();
      }, []);

    return (
      <section className="bg-[#f6f8fd]">
        <NavBar style={"w-full fixed z-50"} />
        <Search />
        {/* <SideBar style={"sticky top-15 z-40"} /> */}
        <SideBar
          style={
            footerVisible
              ? "flex z-40" // footer in view → remove sticky
              : "sticky top-15 z-40" // footer not in view → stay sticky
          }
        />
        <Hero />
        <div id="footer">
          <Footer />
        </div>
      </section>
    );
}

export default HomePage
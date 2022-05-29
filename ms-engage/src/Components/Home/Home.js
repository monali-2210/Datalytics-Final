import React from 'react'
import Navbar from './Navbar/Navbar';
import HeroSection from './Hero/HeroSection'
import Footer from './Footer/Footer'
import Cards from './Cards/Cards';
// import '../../App.css';
import './Home.css';

export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Footer />
    </>
  )
}

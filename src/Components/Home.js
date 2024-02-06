import React from 'react'
import Navbar from './Navbar'
import BannerImage from "../Assets/home-banner-background.png";
import BannerCar from "../Assets/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerImage} alt='' />
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>Welcome to CarZone </h1>
                <p className='primary-text'>CarZone is the best place to buy and sell new 
                and used cars online. Whether you are looking for a family car, 
                a sports car, a luxury car, or a classic car, you will find it here.
                </p>
                <button className='secondary-button'> Order Now<FiArrowRight /> </button>
            </div>
            <div className='home-image-container'>
            <img src={BannerCar} alt='' className='home-banner-image'/>
        </div>
        </div>
    </div>
  )
}

export default Home
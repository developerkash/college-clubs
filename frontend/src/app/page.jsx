'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Navbar from './(main)/navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-12"
        style={{ height: '600px' }}
      >
        <SwiperSlide >
          <div>
            
          <img src="https://www.adityabirlacapital.com/healthinsurance/active-together/wp-content/uploads/2023/09/Sports-1.jpg" alt=""  />
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets-global.website-files.com/5e2b8863ba7fff8df8949888/65b013746d9578f721ca5624_5e28eafb0ab615627351134c_too-late-blog.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.interkultur.com/fileadmin/_processed_/6/f/csm_N-1-20230222-JonasPersson_f7813905d9.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Home
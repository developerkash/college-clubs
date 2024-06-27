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
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <img src="https://thumbs.dreamstime.com/z/kolesnikov-evgeny-21650495.jpg?ct=jpeg" alt=""  />
        </SwiperSlide>
        <SwiperSlide>
        Slide 2
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Home
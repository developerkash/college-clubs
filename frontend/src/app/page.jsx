"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import useAppContext from "@/context/AppContext";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Navbar from "./(main)/navbar";

const Home = () => {
  const { loggedIn } = useAppContext();
  console.log(loggedIn);

  const Showloggedin = () => {
    if (loggedIn) {
      return (
        <>
          <Link
            href="/club"
            className="text-blue-700 hover:text-blue-800 text-sm font-semibold"
          >
            <p className="text-4xl mb-4">Explore</p>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link
            href="/login"
            className="text-blue-700 hover:text-blue-800 text-sm font-semibold"
          >
            <p className="text-4xl mb-4">Explore</p>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-white mt-16 ">
        <h1 className="text-4xl font-bold text-center  p-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
          "Welcome to the Hub of Innovation and Community at [College Name]!"
        </h1>
        <h1 className="text-3xl font-bold text-center  p-5 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text">
          "Together We Learn, Together We Grow."
        </h1>
      </div>

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
        style={{ height: "500px" }}
      >
        <SwiperSlide>
          <img
            src="https://studentlife.ucr.edu/sites/default/files/slife_banner_recruitPanhellic_1170x390.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="http://www.hfac.co.in/images/banner.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/564x/ab/29/9a/ab299abc288058b92db848e0ba4d6eeb.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=2048x2048&w=is&k=20&c=TVfV7jEWwljW6xa4j_DA5h4kC84uWmY0L32vVQbh8cM="
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://as2.ftcdn.net/v2/jpg/07/78/18/39/1000_F_778183950_NUwoZXF8X0Ofhv12Bsgz4dOSnDCRiKKJ.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1282301086/photo/modern-factory-office-meeting-room-busy-diverse-team-of-engineers-managers-and-investors.jpg?s=2048x2048&w=is&k=20&c=LTyMsyibhiidQEfNGfKxXtYGt8X7l_46kDaBlRZ1Rms="
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Featured Categories */}
      <div className="bg-orange-200 mt-12">
        <h1 className="text-2xl  top-0 w-fit h-auto py-4 text-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent  select-auto font-bold  mb-5  p-5">
          | Featured Categories |
        </h1>
        <div className=" flex flex-row item-center justify-between mx-12 px-12">
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-12">{Showloggedin()}</div>
      </div>

      {/* | Spotlight Clubs | */}
      <div className="bg-orange-200 mt-12">
        <h1 className="text-2xl  top-0 w-fit h-auto py-4 text-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent  select-auto font-bold  mb-5  p-5">
          | Spotlight Clubs |
        </h1>
        <div className=" flex flex-row item-center justify-between mx-12 px-12">
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image2.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-12">{Showloggedin()}</div>
      </div>

      

      {/* | Student/members Testimonials | */}
      <div className="bg-orange-200 mt-12">
        <h1 className="text-2xl  top-0 w-fit h-auto py-4 text-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent  select-auto font-bold  mb-5  p-5">
          | Student/members Testimonials |
        </h1>
        <div className=" flex flex-row item-center justify-between mx-12 px-12">
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl item-center">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-28 h-28 object-cover rounded-full"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Name
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Views
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="image1.jpg"
                alt="club"
                className="w-72 h-44 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-lg font-bold text-black block uppercase ">
                  Club Type
                </span>

                <div className="mt-2">
                  <div>
                    <p className="text-gray-400 uppercase text-xs font-semibold text-black cursor-auto">
                      Chaired by:
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/club"
            className="text-blue-700 hover:text-blue-900 text-sm font-semibold"
          >
            <p className="text-4xl mb-2">Explore</p>
          </Link>
        </div>
      </div>

      {/* Footer */}

      <footer className="bg-gray-800 text-white p-12 my-5 ">

        <div className=" gap-24 grid grid-cols-3 justify-items-center">

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <p>123 College Avenue, City, State, ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: contact@college.edu</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Clubs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Join a Club
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f" />
              </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter" />
              </a>
              </li>
              <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram" />
              </a>
              </li>
              <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin" />
              </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="container mx-auto mt-8 border-t border-gray-700 pt-8 text-center">
          <p>© 2024 College Clubs Project. All rights reserved.</p>
          <p>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </p>
          <p>Website designed by [Your Name/Team]</p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Back to Top
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;

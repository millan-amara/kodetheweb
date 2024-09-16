import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {FaLongArrowAltRight} from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa';
import {FaUserCircle} from 'react-icons/fa'
// import CodeImage from '../assets/images/code.jpg'
import HtmlImage from '../assets/images/html.png'
import CssImage from '../assets/images/css.png'
import JsImage from '../assets/images/js.png'
import ReactImage from '../assets/images/react.png'
import MongoImage from '../assets/images/mongo.png'
import NodeImage from '../assets/images/node.png'
import FirebaseImage from '../assets/images/firebase.png'
import TailwindImage from '../assets/images/tailwind.png'
import BootstrapImage from '../assets/images/bootstrap.png'
import AirOneImage from '../assets/projects/air.png'
import AirTwoImage from '../assets/projects/airtwo.png'
import AirThreeImage from '../assets/projects/airthree.png'
import AirFourImage from '../assets/projects/airfour.png'
import JijiOneImage from '../assets/projects/jiji.png'
import JijiTwoImage from '../assets/projects/jijitwo.png'
import JijiThreeImage from '../assets/projects/jijithree.png'
import SpotifyImage from '../assets/projects/spotify.png'

import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 

function Home() {

    const projectImages = [AirThreeImage,AirOneImage,AirTwoImage,AirFourImage,SpotifyImage,JijiOneImage,JijiTwoImage,JijiThreeImage]
    const form = useRef();

    const elementsRef = useRef([]);
    const timelineRef = useRef([])

    useEffect(() => {
        const currentElementsRef = elementsRef.current;
        const currentTimelineRef = timelineRef.current;
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('anime');
            }
          });
        });
        currentElementsRef.forEach((el) => {
          if (el) {
            observer.observe(el);
          }
        });
    
        const observertimeline = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('timeline');
            }
          });
        });
        currentTimelineRef.forEach((el) => {
          if (el) {
            observertimeline.observe(el);
          }
        });
    
        return () => {
          
            currentElementsRef.forEach((el) => {
              if (el) {
                observer.unobserve(el);
              }
            });
          
          
            currentTimelineRef.forEach((el) => {
              if (el) {
                observertimeline.unobserve(el);
              }
            });
         
        };
      }, []);

      const [formData, setFormData] = useState({
        email: '',
        message: '',
      });

      const {email,message} = formData;

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_pm4kpg1', 'template_qdgkji2', form.current, {
          publicKey: 'FfC2jgC2scsnjnV9p'
        })
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          setFormData({
            email: '',
            message: '',
          })
        })
        .catch((error) => {
          console.log('FAILED...', error);
        });

        
      }
  

  return (
    <div>
        <section id="index" className="h-screen flex flex-col bg-gradient-to-tr from-black from-40% via-sky-950 via-70% to-black to-90% pb-2 pt-10">
            <div id="navbar" className="top-0 text-white flex items-center justify-between w-auto mr-8 ml-8">
                <div className="">
                  <div className='text-6xl font-black'>Kode</div>
                  <div className='text-3xl font-black pl-4'>_the_web</div>
                </div>
                <div className="text-orange-500 md:hidden">
                    <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </div>
                <div id="nav-items" className="hidden md:flex w-1/2 justify-end ">
                    <a href="#stacks" className="nav-link hover:text-sky-600 duration-300 mr-1 px-2 py-1 text-white font-semibold">Syllabus</a>
                    <a href="#projects" className="nav-link hover:text-sky-600 duration-30 mx-3 px-3 py-1 text-white font-semibold">Projects</a>
                    <a href="#contact" className="nav-link hover:text-sky-600 text-white rounded-lg px-3 py-1 mr-3 font-semibold">Contact</a>
                </div>
            </div>
            
            <div className="flex justify-center items-center h-full background-wrapper">
            <div id='landing' className='text-white w-full lg:w-3/4 flex flex-col items-center background-content'>
                <h1 className='text-white text-5xl md:text-7xl font-bold mb-4 text-center'>Learn Web Development </h1>
                <p className='text-md md:text-xl font-bold text-center'>Learn Web Development from A-Z in 6 weeks of online interactive learning.</p>
                {/* <h1 className='text-white text-2xl md:text-5xl font-bold hidden md:block'>We<span ref={el} className='auto-type text-orange-500'></span></h1> */}
                <Link to="/wascas" className="bg-sky-500 px-8 py-2 rounded-full mt-16 flex items-center text-white">
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSeP5vHKyDbclVMfoIFKcsAhyh94pGP0Xw8nSbovCbIIV7dbZg/viewform?usp=sf_link' className='mr-2 text-base font-semibold'>Join Class Today</a>
                <span><FaLongArrowAltRight /></span>
                </Link>
            </div>
            </div>
            <div className='text-white flex justify-center mb-2'>
            <a href="#overview" className='text-white'><FaArrowDown className='h-8 w-6 animate-bounce opacity-50' /></a>
            </div>
         </section>

         <section id='stacks' className='flex md:min-h-screen items-center pt-8 md:py-8'>
            <div className='flex flex-col w-full justify-center py-10'> 
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8 md:gap-y-8 justify-items-center'>
                    <img src={HtmlImage} alt="" className='w-1/2 md:w-1/3' />
                    <img src={CssImage} alt="" className='w-1/2 md:w-1/3' />
                    <img src={TailwindImage} alt="" className='w-3/4 md:w-1/2' />
                    <img src={JsImage} alt="" className='w-3/4 md:w-1/2' />
                    <img src={ReactImage} alt="" className='w-1/2 md:w-1/3' />
                    <img src={FirebaseImage} alt="" className='w-3/4 md:w-1/2' />
                    <img src={MongoImage} alt="" className='w-3/4 md:w-1/2' />
                    <img src={NodeImage} alt="" className='w-1/2 md:w-1/3' />
                    <img src={BootstrapImage} alt="" className='w-3/4 md:w-1/2' />
                </div>
            </div>
         </section>
         <section id='projects' className='min-h-screen flex flex-col justify-center'>
            <div className='w-full'>
                <p className='text-center text-3xl md:text-4xl py-8 bg-sky-800 text-white'>At the end of the sessions, you should be able to build similar projects:</p>
                
            </div>
            <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                modules={[EffectCoverflow,Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={true}
                className='swiper-container md:w-3/4 xl:w-1/2'
            >
                {projectImages.map((url, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="swiperSlideDiv py-10" 
                        >
                            <img src={url} className="swiperSlideImg" alt="car" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex justify-center'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSeP5vHKyDbclVMfoIFKcsAhyh94pGP0Xw8nSbovCbIIV7dbZg/viewform?usp=sf_link' className='w-3/4 md:w-1/3 border-2 text-2xl md:text-3xl text-white text-center bg-sky-800 rounded-full px-8 py-3 mt-12 cursor-pointer'>Join Class!</a>
                
            </div>
         </section>
         <section ref={(el) => (timelineRef.current[0] = el)} className="px-auto max-w-full relative md:py-16 pb-8 h-auto md:h-screen flex flex-col justify-center">
            <div ref={(el) => (elementsRef.current[0] = el)} className="container opacity-0 text-white left-container relative w-1/2 py-4 px-16">
                <div className='bg-sky-950 md:-right-5 left-3 md:left-auto absolute w-10 h-10 rounded-full top-8 z-10' />
                <div className="text-box rounded-lg bg-sky-950 ">
                <h2>Learn</h2>
                <small>Part 1</small>
                <p>Gain the skills needed for the job with practical, hands-on experience.</p>
                <span className='left-container-arrow'></span>
                </div>
            </div>
            <div ref={(el) => (elementsRef.current[1] = el)} className="container opacity-0 text-white right-container relative w-1/2 py-4 px-16">
            <div className='bg-sky-950 left-3 md:-left-5 absolute w-10 h-10 rounded-full top-8 z-10 ' />
                <div className="text-box rounded-lg bg-sky-950 ">
                <h2>Build</h2>
                <small>Part 2</small>
                <p>Build and style interactive websites & web applications.</p>
                <span className='right-container-arrow'></span>
                </div>
            </div>
            <div ref={(el) => (elementsRef.current[2] = el)} className="container opacity-0 text-white left-container relative w-1/2 py-4 px-16">
            <div className='bg-sky-950 absolute w-10 h-10 rounded-full left-3 md:left-auto md:-right-5 top-8 z-10' />
                <div className="text-box rounded-lg bg-sky-950">
                
                <h2>Career Guidance</h2>
                <small>Part 3</small>
                <p>Get personalized career coaching and job search assistance.</p>
                <span className='left-container-arrow'></span>
                </div>
            </div>
            <div ref={(el) => (elementsRef.current[3] = el)} className="container opacity-0 text-white right-container relative w-1/2 py-4 px-16">
            <div className='bg-sky-950 absolute w-10 h-10 rounded-full left-3 md:-left-5 top-8 z-10' />
                <div className="text-box rounded-lg bg-sky-950">
                <h2>Community</h2>
                <small>Part 4</small>
                <p>Join a community of like-minded individuals.</p>
                <span className='right-container-arrow'></span>
                </div>
            </div>
        </section>

        <section className="py-16 h-auto md:h-screen flex items-center bg-gradient-to-r from-black from-20% via-sky-950 via-70% to-black to-90%">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    <div ref={(el) => (elementsRef.current[4] = el)} className="p-6 opacity-0 text-white rounded shadow-md shadow-black flex flex-col items-center">
                        <FaUserCircle className='h-16 w-16 mb-8' />
                        <p>"The instructor's approach to coding made everything click! I went from knowing nothing to building my own projects in just a few weeks. Highly recommend for beginners!"</p>
                        <h3 className="text-xl font-bold mt-4">~</h3>
                    </div>
                    <div ref={(el) => (elementsRef.current[5] = el)} className="p-6 opacity-0 text-sky-500 rounded shadow-md shadow-black flex flex-col items-center">
                        <FaUserCircle className='h-16 w-16 mb-8' />
                        <p>"This course gave me the confidence to switch careers. The hands-on learning and personalized feedback made all the difference. I'm now working as a full-time developer!"</p>
                        <h3 className="text-xl font-bold mt-4">~</h3>
                    </div>
                    <div ref={(el) => (elementsRef.current[6] = el)} className="p-6 opacity-0 text-white rounded shadow-md shadow-black flex flex-col items-center">
                        <FaUserCircle className='h-16 w-16 mb-8' />
                        <p>"I struggled with coding before, but the classes broke everything down in a way that was easy to understand. The instructor was supportive and always available to help"</p>
                        <h3 className="text-xl font-bold mt-4">~</h3>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact">
          <div className="contact">
            <h2>Get in Touch</h2>
            <p>Have any questions about Building Websites?</p>
            <form ref={form} onSubmit={onSubmit} id="contact-form" className="contact-form px-3">
              <div className="mb-7">
                  <label htmlFor="email" className="mb-3">Email:</label>
                  <input type="email" id="email" name="email" value={email} onChange={handleChange} required className="focus:outline-none focus:ring-2 appearance-none text-sm" />
              </div>

              <div className="mb-5">
                  <label htmlFor="message" className="mb-3">Message:</label>
                  <textarea id="message" name="message" value={message} onChange={handleChange} rows="4" required className="focus:outline-none focus:ring-2 appearance-none text-sm"></textarea>
              </div>
              <div>
                  <button id="contact-button" type="submit" className="flex bg-gradient-to-r from-black from-20% via-sky-600 via-70% to-black to-90% text-white w-full py-2 rounded-md items-center justify-center">Send Message</button>
              </div>
              
            </form>
          </div>
        </section>

        <footer id="footer" class="bg-sky-50 px-5 pt-14 pb-8 text-sm">
        <div class="flex flex-col md:flex-row justify-around mb-5">
            <div class="w-full md:w-1/4 md:flex md:flex-col md:justify-center md:items-center">
                <p class="text-lg mb-3">ABOUT</p>
                <p class="mb-5">Do you want to learn how to build amazing stuff? Sign up today!</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeP5vHKyDbclVMfoIFKcsAhyh94pGP0Xw8nSbovCbIIV7dbZg/viewform?usp=sf_link" class="border-2 border-sky-600 hover:bg-sky-600 hover:text-white py-2 px-4 rounded-lg font-bold">Join Class<i class="fa-solid fa-arrow-right ml-3"></i></a>
            </div>
            <div class="border-l-2 border-black hidden md:block">
                <p class=""></p>
            </div>
            <div class="mt-10 md:mt-0">
                <p class="text-lg mb-3">Contact Us</p>
                <p class="mb-1">@codetheweb</p>
            </div>
        </div>
        <div class="flex justify-center">
            <p>&copy; Codetheweb 2024. All rights reserved</p>
        </div>

      </footer>
    </div>
  )
}

export default Home
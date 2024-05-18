import {useState, useEffect, useRef } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

import SumbarSlide from "./Sumbar_Slide.jsx";
import Data from "./Destination"
import Carrouse from "./Image-Slider.jsx"

import About_Website from "./About-Website.jsx"

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Form from "./Form.jsx"

import Currency from "./Currency.jsx"

import { Link } from "react-router-dom";

import web_logo from "./assets/logo.png";

import "./home.css";

import Footers from "./footer.jsx"

 
export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );

      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

      let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

      gsap.utils.toArray("section").forEach((section, i) => {
        section.bg = section.querySelector(".bg"); 

      // Give the backgrounds some random images
      section.bg.style.backgroundImage = `url(${Data[i].imgURL[3]})`;;
      
      // the first image (i === 0) should be handled differently because it should start at the very top.
      // use function-based values in order to keep things responsive
      gsap.fromTo(section.bg, {
        backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
      }, {
        backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => i ? "top bottom" : "top top", 
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true 
        }
      });

    });

    const showAnim = gsap.from(".navbar", {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    let timeout;

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
          clearTimeout(timeout); 
        } else {
          clearTimeout(timeout);
          showAnim.reverse();
        }
      }
    })


  }, []);

  
 

 
  
 
  const navList = (
  
    <ul className="flex lg:m-0 flex-col flex lg:flex-row lg:justify-center lg:items-center gap-2 lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to={{
                      pathname: `/search`,
                }}>
          <a href="#" className="flex items-center">
            Explore
          </a>
        </Link>
       
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#Galery" className="flex items-center">
          Galery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#ContactUs" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
          <Link to={{
                      pathname: `/AboutUs`,
                }}>
            <a href="#ContactUs" className="flex items-center">
              About Us
            </a>
        </Link>
      </Typography>
    </ul>
  );


 
  return (
    <>
    
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-0 lg:px-8 lg:py-1 navbar">
        <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img src={web_logo} alt="" as="a" href="#" className="w-24"/> {/* Adjust the w-{size} as needed */}
        </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden  justify-center items-center gap-2 lg:flex lg:gap-6">{navList}</div>
            <div className="flex items-center gap-x-1 justify-center">
         
                <Currency className="flex gap-x-0 gap-y-0"></Currency>
  
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      <div className="Content">
                    {/* 
            <div className="mx-auto max-w-screen-md">
                  <Card className="mb-12 overflow-hidden">
                    
                  </Card>

            <Typography variant="h2" color="blue-gray" className="mb-2">
              Selamat Datang di Sumatera Barat
            </Typography>
            <Typography color="gray" className="font-normal text-lg">
            Temukan keajaiban Padang, pintu gerbang ke Sumatera Barat, dimana keindahan alam dan kekayaan budaya Minangkabau menyatu. Nikmati pesona pantai, kelezatan rendang, dan keramahan warganya. Padang menanti dengan pengalaman tak terlupakan yang hanya bisa Anda temukan di sini!
            </Typography>
          </div>
          */}
        <div className="Slider">
            <Carrouse></Carrouse>
          </div>

          <div className="About-Container About-Containers m-auto grid justify-center">
            <About_Website></About_Website>
          </div>
        {/* <section>
            <div class="bg"></div>
            <h1>Dari Bangunan Bersejarah</h1>
            </section>
            <section>
            <div class="bg"></div>
            <h1>Kota tua</h1>
            </section >
            <section >
            <div class="bg"></div>
            <h1>Pariwisata Alam</h1>
            </section>
            <section >
            <div class="bg"></div>
            <h1>Hingga Cerita Rakyat</h1>
          </section> */}
          <div className="container" id="Galery">
            <SumbarSlide></SumbarSlide>
          </div>
          <div id="ContactUs">
            <Form></Form>
          </div>

          {/* <div className="container">
              <a href="/Search">Explore more</a>
          </div> */}
          {/* <Picture_Galery></Picture_Galery> */}
          <Footers></Footers>
      </div>
      
      

     
    
</>
  );
}
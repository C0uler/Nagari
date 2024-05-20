import React from "react";
import Data from "./Destination"
import './scss/styles.scss'
import Weather from './Weather.jsx'
import Maps from './Maps.jsx'

import { useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import "./Explore.css"
export default function FeaturedImageGallery() {
  const params = useParams()
  const indexs = params.id;
  const Datas = Data[indexs-1];

  useEffect(()=>{
    window.scrollTo(0, 0);
  })
 
  const [active, setActive] = React.useState(
    Datas.imgURL[1],
  );
 
  return (
      <>
      <div id="container">
        
        <nav aria-label="breadcrumb" class="w-max">
          <ol class="flex flex-wrap items-center w-full px-4 py-2 rounded-md">
            <li
              class="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
                <Link to={{
                      pathname: `/`,
                }}>

                  <button href="#" className="opacity-60">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                          </svg>
                  </button>
              
                </Link>
            
              <span
                class="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li
              className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
              <Link to={{
                        pathname: `/Search`,
                        }}>
              <button href="#" className="opacity-60">
                <span>
                  Search
                </span>
              </button>
              </Link>
              <span
                class="mx-2 font-sans text-sm antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">/</span>
            </li>
            <li
              class="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
              <a href="#">
                Explore
              </a>
            </li>
          </ol>
        </nav>
        

        <div className="Carouser-container grid grid-cols-1 md:grid-cols-10 ">
          <div className="col-span-1 md:col-span-5 text-center md:text-left grid h-auto">
          
            <h1 className="Destination-title text-left">{Datas.TempatWisata}</h1>
            <hr />
            <div className="TextBox text-justify text-sm  md:text-md lg:text-lg xl:text-xl">
                {Datas.ket}
            </div>
            <div className="MapContainer my-6 item-center m-auto">
              <Maps location = {Datas.TempatWisata}/>
            </div>
          </div>

          <div className="grid justify-items-center col-span-1 md:col-span-5 Thumbnail text-center align-center mt-3 md:my-0 h-auto">
            <div className="m-auto">
                <div id="MainImg-Container" className="pb-0 row-span-1 text-center justify-center align-center w-full">

                  <img
                    className="rounded-lg object-cover m-auto"
                    src={active}
                    alt=""
                  />
                </div>
                <div className="w-full mt-2">
                <div className="grid grid-cols-4 gap-4 relative row-span-1 align-top m-auto" id="Thumbnail">
                  {Datas.imgURL.map((imgURL,index) => (
                    <div key={index} className="m-auto h-full">
                      <img
                        onClick={() => setActive(imgURL)}
                        src={imgURL}
                        className="cursor-pointer rounded-lg  w-full h-full object-fill m-auto"
                        alt="gallery-image"
                      />
                    </div>
                ))}
                </div>
              </div>
            </div>
        </div>
      </div>
        
     </div>
     <div className="Weather justify-center items-center my-12 w-screen h-1/3 text-center">
            <Typography variant="h2">
              Weather Condition
            </Typography>
            <Weather/>
        </div>
    </>
  );
}
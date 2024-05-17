import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import {useState, useEffect, useRef } from "react";

import "./Galery_of_picture.css"

import wisataData from "./Destination";


export default function Picture_Galery(){
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // Register ScrollTrigger plugin
      
        // Define the timeline with ScrollTrigger
        console.log(window.innerHeight * 4);
        const screenWidth = window.screen.width;
        console.log(screenWidth);

         // Define the timeline with ScrollTrigger
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".grid-container",
              start: "top top",
              end: () => {
                const gridContainerHeight = document.querySelector('.grid-container').offsetHeight;
                return `+=${gridContainerHeight}`;
              },
              scrub: true,
              pin: ".grid",
              anticipatePin: 1,
              yoyo: true
            }
          });

          // Initial animations for the gallery blocks
          tl.set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
            .to(".gridBlock:not(.centerBlock)", { duration: 0.4, autoAlpha: 1 }, 0.001)
            .from(".gridLayer", {
              scale: 3.33,
              ease: "none",
            });

          // Resize the gallery to become larger (back to normal scale) as the user scrolls down
          tl.to(".grid", {
            scale: 1, // Adjust the scale value to your original scale
            ease: "none",
            duration: 1,
          }, "<"); // Use '<' to start the animation at the same time as the previous one

          // Set background images for .gridBlock elements
          gsap.set('.gridBlock', { backgroundImage: (index, _) => `url(${wisataData[8-index].imgURL[3]})`});

          // Load a large image and reveal it on load
          const bigImg = new Image();
          bigImg.onload = () => {
            gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
          };
          bigImg.src = `${wisataData[1].imgURL[3]}`;
      }, []);
      

    return(
        <>
            <div class="grid-container">
            
                <div class="grid">
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer centerPiece">
                    <div class="gridBlock centerBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"><a href="" target="_blank"></a></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                    <div class="gridLayer">
                    <div class="gridBlock"></div>
                    </div>
                </div>
            </div>


        </>
    );
}
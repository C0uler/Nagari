import {React, useEffect} from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Link } from "react-router-dom";



import "./Sumbar_Slide.css";
 
export default function SumbarSlide() {
    gsap.registerPlugin(ScrollTrigger);

    
    useEffect(() => {
        // Initialize the animations on mount
        const triggers = gsap.utils.toArray('.animate-div').map((div, index) => {
          const w = div.querySelector('.wrapper');
          if(w){
            const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - div.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
            return gsap.fromTo(w, { x }, {
            x: xEnd,
            scrollTrigger: {
              trigger: div,
              scrub: 0.5
            }
          });
          }
        });
    
        // Cleanup function for useEffect
        return () => {
          // Clean up the ScrollTrigger instances
          triggers.forEach(trigger => trigger.scrollTrigger.kill());
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
    
 
  return (
    <>
   
    <div className="Showcase">
        <div class='demo-wrapper'>
     
        <div class='demo-text flex h-auto animate-div'>
            <div class='wrapper text text-md'>
            ExxPPPPLLOOREEEEE
            </div>
        </div>
        <div class='demo-gallery flex h-auto animate-div'>
            <ul class='wrapper'>
            <li>
                <Link to={`/explore/7`}>
                    <img height={'874'} src='https://rentalmobilpadang.co.id/wp-content/uploads/2019/03/Cukup-Keren-Danau-Singkarak-New.jpg' width={'1240'}/>
              </Link>
            </li>
            <li>
                <Link to={`/explore/8`}>
                    <img height={'874'} src='https://www.djkn.kemenkeu.go.id/files/images/2020/06/WhatsApp_Image_2020-06-19_at_10_58_16.jpeg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/9`}>
                    <img height={'874'} src='https://pariwisata.sultraprov.go.id/wp-content/uploads/2022/12/Nirwana-baubau-scaled.jpg' width={'1240'}/>
                </Link>
            </li>
            </ul>
        </div>
        <div class='demo-gallery flex h-auto animate-div'>
            <ul class='wrapper'>
            <li>
                <Link to={`/explore/4`}>
                    <img height={'874'} src='https://rentalmobilpadang.co.id/wp-content/uploads/2019/03/Hamparan-Pantai-Air-Manis.jpg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=121' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=73' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=159' width={'1240'}/>
            </li>
            </ul>
        </div>
        <div class='demo-gallery flex h-auto animate-div'>
            <ul class='wrapper'>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=17' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=115' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=194' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=105' width={'1240'}/>
            </li>
            </ul>
        </div>
        <div class='demo-gallery flex h-auto animate-div'>
            <ul class='wrapper'>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=202' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=0' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=161' width={'1240'}/>
            </li>
            <li>
                <img height={'874'} src='https://source.unsplash.com/random/1240x874?sig=120' width={'1240'}/>
            </li>
            </ul>
        </div>
        <div class='demo-text h-auto animate-div'>
            <div class='wrapper text'>
            ExxPPPPLLOOREEEEE
            </div>
        </div>

        <div></div>
    </div>
    </div>
    </>
  );
}
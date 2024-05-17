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
                    <img height={'874'} src='https://www.koranperdjoeangan.com/wp-content/uploads/2023/01/jembatan-akar-sumatera-barat.jpg' width={'1240'}/>
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
                <Link to={`/explore/4`}>
                <img height={'874'} src='https://jadesta.kemenparekraf.go.id/imgpost/94652.jpg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/6`}>
                <img height={'874'} src='https://asset.kompas.com/crops/fBCiSPzdCZFfP1GeN69MrdO-Z_M=/0x0:750x500/750x500/data/photo/2022/01/30/61f643727377f.png' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/6`}>
                <img height={'874'} src='https://images-ext-1.discordapp.net/external/9fx1uACY6Zz_pClq3uahra05dP6_vSQda8e-EUre5D0/https/static.promediateknologi.id/crop/0x0%3A0x0/0x0/webp/photo/p2/136/2023/12/12/hutan-kerinci-seblat-3393250099.jpg?format=webp&width=1052&height=701' width={'1240'}/>
                </Link>
            </li>
            </ul>
        </div>
        <div class='demo-gallery flex h-auto animate-div'>
            <ul class='wrapper'>
            <li>
                <Link to={`/explore/2`}>
                <img height={'874'} src='https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revisi-all-destination-s-image/destination-revision-part-two/sawahlunto_01.jpg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/1`}>
                <img height={'874'} src='https://asset.kompas.com/crops/-o__--WLuEoOE55iHH6zVqZbxQE=/0x0:996x664/750x500/data/photo/2021/08/06/610cff0494252.jpg' width={'1240'}/>
                </Link>
            </li>
            <li>
            <Link to={`/explore/9`}>
                <img height={'874'} src='https://i.insider.com/5c42463bdde8672abf55af1b?width=1000&format=jpeg&auto=webp' width={'1240'}/>
            </Link>
            </li>   
            <li>
                <Link to={`/explore/5`}>
                <img height={'874'} src='https://i.pinimg.com/564x/86/cb/ce/86cbce36588ea9f3808444e476da34b7.jpg' width={'1240'}/>
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
                <Link to={`/explore/8`}>
                <img height={'874'} src='https://www.djkn.kemenkeu.go.id/files/images/2020/06/WhatsApp_Image_2020-06-19_at_10_58_16.jpeg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/3`}>
                <img height={'874'} src='https://i.pinimg.com/564x/bd/27/7a/bd277a4d13bcd3420a076f7670e75d7b.jpg' width={'1240'}/>
                </Link>
            </li>
            <li>
                <Link to={`/explore/7`}>
                <img height={'874'} src='https://i.pinimg.com/564x/5c/ae/47/5cae474893bc50b3a198428d0465486e.jpg' width={'1240'}/>
                </Link>
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
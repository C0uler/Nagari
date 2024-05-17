import "./About-Us.css";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Qna_Section from "./Qna-Section.jsx"
import SpeedDialWithTextOutside from "./Speed-Dial.jsx"
import Footers from "./footer.jsx"

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

export default function FeaturedImageGallery() {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.scrollTo(0, 0);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        start: "top bottom", // Adjusted start position
        end: "bottom top", // Adjusted end position
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  }, []);

  return (
    <>
      <div className="cInnerContent">
        <div className="header-container h-screen text-center items-center justify-center flex">
            <h1 className="header-section gs_reveal ipsType_center  m-auto">Want To Know About Us</h1>
        </div>
            <div className="features">
                    <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft flex justify-center">
                            <div className="family m-auto h-auto">
                                <div class="about-card m-auto">
                                <img width="479" src="https://picsum.photos/479/479?index=1" alt=""/>
                            </div>
                            </div>
                        </div>

                        <div class="ipsGrid_span7 ipsType_left">
                            <h2 class="heading_large gs_reveal">Jordan Arya Yohamsa <strong> Team Leader</strong></h2>
                            <p class="gs_reveal"><strong>00000099468</strong></p>
                        </div>
                        </div>

                        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div class="ipsGrid_span7 ipsType_right">
                            <h2 class="heading_large gs_reveal">Bryan Situmorang <strong>Web</strong>Developer</h2>
                            <p class="gs_reveal"><strong>00000092415</strong></p>
                        </div>

                        <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight flex justify-center">
                            <div class="about-card m-auto">
                            <img width="479" src="https://picsum.photos/479/479?index=2" alt=""/>
                            </div>
                        </div>
                        </div>

                        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft flex justify-center">
                            <div class="about-card m-auto">
                            <img width="479" src="https://picsum.photos/479/479?index=3" alt=""/>
                            </div>
                        </div>

                        <div class="ipsGrid_span7 ipsType_left">
                            <h2 class="heading_large gs_reveal">Shakira Salvia Nesya <strong>Design</strong> And <strong>Banner</strong></h2>
                            <p class="gs_reveal"><strong>00000094844</strong></p>
                        </div>
                        </div>

                        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                            <div class="ipsGrid_span7 ipsType_right">
                                <h2 class="heading_large gs_reveal">Chandler Vincent Cleopas <strong>Asset</strong> And <strong>Research</strong></h2>
                                <p class="gs_reveal">00000109789</p>
                            </div>

                        <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight flex justify-center">
                            <div class="about-card m-auto">
                            <img width="479" src="https://picsum.photos/479/479?index=4" alt=""/>
                            </div>
                        </div>
                </div>
            </div>
            <div className="container h-screen ">
                <h1 className="text-center py-16 h-1/5">Tujuan dan Motivasi Kami</h1>
                 <Qna_Section className="w-4/5">

                </Qna_Section>
            </div>
            <SpeedDialWithTextOutside></SpeedDialWithTextOutside>
      </div>
      <Footers></Footers>
    </>
  );
}

import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
 import "./Image-Slider.css"
 import { useEffect } from "react";
 import { Link } from "react-router-dom";
 import { useRef } from "react";
 import Masjid_Raya from "./assets/Masjid-Raya-Sumatera-Barat.jpg"
 import Lompat_Batu from "./assets/Lombat-Batu.jpg"

export default function CarouselWithContent() {

  useEffect(() => {
   
  }, []);



  return (
    <>
    <Carousel transition={{ duration: 2 }} className="rounded-xl h-full w-full"
            loop ={true}
            autoplay = {true}
            autoplayDelay = {15000}
            prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4 z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4 z-10 next-button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}

              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4">
                  {new Array(length).fill("").map((_, i) => (
                    <div
                      key={i}
                      className={`block h-1 cursor-pointer transition rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 " : "w-4 "} navigation-dot ${activeIndex === i ? "active" : "not-active"}`}
                      onClick={() => setActiveIndex(i)}
                    >
                      {activeIndex === i && <div className="filling-animation block h-1 cursor-pointer transition rounded-2xl  content-[''] w-8"></div>}
                    </div>
                  ))}
                </div>
              )}
    >
      <div className="relative h-full w-full">
        <img
          src="https://cdn.discordapp.com/attachments/1219996856394715229/1240920720364670986/Lembah_Anai_1200-transformed.webp?ex=664850fa&is=6646ff7a&hm=fd4a68d69586083d79cbd38465419074511e382865686b0b34f94795c688ee12&"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={{
                      pathname: `/search`,
                }}>
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                </Link>  
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://cdn.discordapp.com/attachments/1219996856394715229/1240920095409307648/Screenshot_2024-05-17_133045-Us6TkE8cp-transformed.png?ex=66485065&is=6646fee5&hm=d9a48b5c1bbe7a82a7c4bd9fa20d5a89ad51bcfc6253fa088eafb0ba71a1aa49&"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Link to={{
                      pathname: `/search`,
                }}>
                      <Button size="lg" color="white">
                        Explore
                      </Button>
              </Link>  
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://cdn.discordapp.com/attachments/1219996856394715229/1240918972153724958/Screenshot_2024-05-17_134346-transformed.png?ex=66484f5a&is=6646fdda&hm=1ad87ce41dc0aea59656900804071a4f1b91b9673333ef6c5a9175e78b63af0e&"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Link to={{
                      pathname: `/search`,
                }}>
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                </Link>  
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </>
  );
}
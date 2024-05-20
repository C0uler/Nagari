import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
 import "./Image-Slider.css"
 import { useEffect } from "react";
 import { Link } from "react-router-dom";
 import Picture_1 from "./assets/Slide-1.jpg"
 import Picture_2 from "./assets/Slide-2.jpg"
 import Picture_3 from "./assets/Slide-3.jpg"


export default function CarouselWithContent() {

  useEffect(() => {
   
  }, []);



  return (
    <>
    <Carousel transition={{ duration: 2 }} className="rounded-xl h-full w-full Carousel-loader"
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
                      className={`block h-1 cursor-pointer transition rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 " : "w-4 "} navigation-dot ${activeIndex === i ? "dot-active" : "not-active"}`}
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
          src={Picture_1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="slider-background absolute inset-0 grid h-screen w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Keindahan Alam
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-lg md:text-sm lg:text-base"
            >
             Temukan pesona menawan air terjun Sumatera Barat. Di balik keindahan gambarnya terdapat esensi yang memikat, sebuah kekuatan penyegar yang memanggil jiwa yang lelah. 
             Rasakan embun menyegarkan pada kulit Anda, 
             dengarkan simfoni irama air yang mengalir, dan biarkan diri Anda terbawa ke dunia pembaruan dan penyegaran. Di tengah dekapan alam yang hijau, temukan kedamaian dan inspirasi dalam pesona abadi dari keajaiban alam ini.
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
          src={Picture_2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="slider-background absolute inset-0 grid h-screen w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Kemuliaan Arsitektur yang Memukau
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-sm lg:text-base"
            >
              Telusuri pesona memikat Sumatera Barat yang mengagumkan. Di balik kemegahannya, terdapat esensi yang menggoda, sebuah daya tarik yang menyegarkan bagi jiwa yang lelah. Nikmati detil yang menakjubkan, dengarkan harmoni bentuk dan ruang yang tercipta, dan biarkan diri Anda terserap dalam suasana yang menawarkan pembaharuan dan penyegaran. Di tengah keindahan alam yang menakjubkan, temukan kedamaian dan inspirasi yang tak terhingga dari keajaiban ini.
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
          src={Picture_3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className=" slider-background absolute inset-0 grid h-screen w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-32 md:w-2/4 md:pl-20 md:pb-34 lg:pl-32 lg:pb-44">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Kultur yang Beranekaragam
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-sm lg:text-base"
            >
              Terpesona oleh keindahan budaya Sumatera Barat. Di sana, kekuatan tak terlihat memanggil jiwa yang letih. Rasakan kehangatan budaya, dengar harmoni tradisi, dan biarkan diri Anda terhanyut dalam nuansa segar. Di sini, temukan ketenangan dan inspirasi dalam keajaiban budaya yang menakjubkan.
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
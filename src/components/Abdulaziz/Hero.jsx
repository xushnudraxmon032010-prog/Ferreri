
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    category: "Racing",
    title: "SCUDERIA FERRARI HP",
    button: "DISCOVER",
    video: "/public/video/Ferrari Daytona SP3 - Ferrari.com.mp4",
  },
  {
    category: "Collections",
    title: "FOR THOSE WHO DREAM",
    button: "HOLIDAY GIFTS",
    video: "/public/video/Ferrari Roma – Official Video.mp4",
  },
  {
    category: "Sports Cars",
    title: "START YOUR ENGINE",
    button: "DISCOVER THE FERRARI LINE UP",
    video: "/public/video/Passione Ferrari Club Challenge.mp4",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const videoRef = useRef(null);
  const activeSlide = slides[activeIndex];

  
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isPaused) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [activeIndex, isPaused]);

  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };


  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  // Pause / Play
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  return (
    <section className="relative h-[calc(100svh-42px)] min-h-[500px] w-full overflow-hidden bg-black">

     
      <video
        key={activeSlide.video}
        ref={videoRef}
        src={activeSlide.video}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={nextSlide}
        className="absolute inset-0 h-full w-full object-cover"
      />


      <div className="absolute inset-0 bg-black/35" />

   
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

  
      <div
        key={activeIndex}
        className="absolute inset-0 z-10 flex flex-col items-center justify-end
        pb-[115px] text-center text-white animate-hero-content px-4"
      >
     
        <p className="mb-4 text-[15px] font-semibold tracking-wide">
          {activeSlide.category}
        </p>

        
        <h1 className="text-2xl font-bold uppercase tracking-wide sm:text-4xl">
          {activeSlide.title}
        </h1>

        
        <a
          href="#"
          className="mt-12 flex h-[63px] min-w-[235px] items-center justify-center
          border border-white px-6 text-[13px] font-bold
          transition-all duration-300 hover:bg-white hover:text-black"
        >
          {activeSlide.button}
        </a>
      </div>

    
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

        {slides.map((slide, index) => (
          <button
            key={slide.video}
            onClick={() => selectSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-[10px] w-[10px] rounded-full transition-all duration-300
              ${
                activeIndex === index
                  ? "border-2 border-[#e32636] scale-125"
                  : "bg-white/60 hover:bg-white"
              }`}
          />
        ))}

      </div>

      
      <button
        onClick={togglePause}
        aria-label={isPaused ? "Play video" : "Pause video"}
        className="absolute bottom-5 right-6 z-20 flex h-[30px] w-[30px]
        items-center justify-center rounded-full border border-white/80
        text-white transition hover:bg-white hover:text-black"
      >
        {isPaused ? (
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
            <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
          </svg>
        )}
      </button>

    </section>
  );
};

export default Hero;

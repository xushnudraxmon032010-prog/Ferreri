
import React from "react";

const Banner = () => {
  return (
    <section className="relative h-[950px] w-full overflow-hidden bg-black">

    
      <img
        src="/public/assets/trackferari.jpg"
        alt="Ferrari 296 Challenge"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

     
      <div className="absolute inset-0 bg-black/10" />

  
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[120px] text-center text-white px-4">

      
        <h2 className="text-3xl font-bold uppercase tracking-wide sm:text-[34px]">
          FROM TRACK TO ROAD
        </h2>

        
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <a
            href="#"
            className="flex h-[63px] min-w-[270px] items-center justify-center
            border border-white px-7 text-[13px] font-bold
            transition-all duration-300
            hover:bg-white hover:text-black"
          >
            296 CHALLENGE STRADALE
          </a>

          <a
            href="#"
            className="flex h-[63px] min-w-[235px] items-center justify-center
            border border-white px-7 text-[13px] font-bold
            transition-all duration-300
            hover:bg-white hover:text-black"
          >
            296 CHALLENGE EVO
          </a>

        </div>
      </div>
    </section>
  );
};

export default Banner;

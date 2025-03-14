import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" w-full mx-auto py-4 max-h-[800px] flex flex-col md:flex-row justify-between items-center mt-[77px] font-onest">
      {/* Rest of the hero section content stays the same */}
      <div className="w-full max-h-[560px] relative overflow-hidden">
        <img
          src={"/5.jpg"}
          alt="hero-image"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src={"/hero-upper.png"}
            alt="hero-image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 w-[90%] flex flex-col justify-end">
            <div className="flex flex-col gap-2 text-white mb-4 w-full">
              <div className="flex text-white w-full">
                <p className="text-2xl md:text-4xl font-bold">Find Your Ideal Senior</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between text-white mb-4 w-full">
                <div className="flex items-center">
                  <p className="text-5xl md:text-7xl font-bold text-[#BEE36E] tracking-wide leading-tight">
                   Living Community
                  </p>
                  
                </div>
                <div className="mt-4 md:mt-auto">
                  <Link to={"/communities"} className="bg-[#BEE36E] flex items-center gap-2 justify-center text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-lg font-bold w-full sm:w-[210px] h-[50px] shadow-md hover:bg-[#BEE36E]/80 transition-all duration-300">
                    Search Now <ArrowRightIcon className="w-[20px] h-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default HeroSection;
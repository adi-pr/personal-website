"use client"

import { motion as m } from "framer-motion";

import { Staatliches } from "next/font/google";
import Image from "next/image";
import { ScrollingText } from ".";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section
      className={`${staatliches.className} bg-[#191923] text-white w-full h-[50vh] md:h-[100vh] landscape:h-[100vh] flex justify-center items-center relative overflow-hidden`}
    >
      <ScrollingText />
      <div className="max-w-[1000px] lg:text-[80px] md:text-[64px] text-[32px] z-10 flex flex-col items-center">
        <m.div 

        > 
          <Image
            src="/hero-icon.svg"
            alt="Hero Icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </m.div>
        <div>
          <p>ADITYA PRASAD:</p>
        </div>
        <m.div
          className="text-[#191923] bg-[#F39237] rounded-2xl px-4 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <p> <span className="opacity-60">🪄</span> THE CODE WIZARD</p>
        </m.div>
      </div>
    </section>
  );
};

export default Hero;

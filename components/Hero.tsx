"use client";

import { motion as m } from "framer-motion";

import { Link } from 'react-scroll';

import { Staatliches } from "next/font/google";
import Image from "next/image";
import { ScrollingText } from ".";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });

const Hero = () => {
  return (
    <section
      className={`${staatliches.className} z-0 md:z-20 bg-[#191923] text-white w-full h-[50vh] md:h-[100vh] landscape:h-[100vh] flex justify-center items-center relative overflow-hidden`}
    >
      <ScrollingText />
      <m.div
        className="max-w-[1000px] lg:text-[80px] md:text-[64px] text-[32px] z-10 flex flex-col items-center"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
      >
        <div>
          <Image
            src="/hero-icon.svg"
            alt="Hero Icon"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
        <div>
          <p>ADITYA PRASAD:</p>
        </div>
        <m.div
          className="text-[#191923] bg-[#F39237] rounded-2xl px-4 cursor-pointer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <p>🪄THE CODE WIZARD</p>
          </Link>
        </m.div>
      </m.div>
    </section>
  );
};

export default Hero;

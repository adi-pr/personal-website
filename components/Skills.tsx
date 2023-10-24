"use client";

import { motion as m } from "framer-motion";
import { iconMap } from "@/constants";
import { Unica_One } from "next/font/google";

import Image from "next/image";

const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#191923] md:px-20 py-5">
      <div className="p-4 md:p-8">
        <h2
          className={`${unica_One.className} text-white text-[65px] lg:text-[165px] md:text-[117px] `}
        >
          My Skills
        </h2>
        <div className="max-w-[700px]">
          <div className="grid md:grid-cols-4 grid-cols-3 justify-center items-center gap-10 bg-[#403F4C] p-5 rounded-lg">
            {Object.entries(iconMap).map(([key, value], index) => (
              <div key={key} className="">
                <m.div
                  className="flex flex-col justify-center items-center relative cursor-pointer"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{ once: true }}
                >
                  <m.div
                    className="border absolute h-[96px] w-[96px] rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "70%"
                      }}
                  />
                  <div className="flex flex-col justify-center items-center gap-2 p-3">
                    <Image
                      src={value}
                      alt="skill icon"
                      width={36}
                      height={36}
                    />
                    <p className="capitalize text-sm text-white">{key}</p>
                  </div>
                </m.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

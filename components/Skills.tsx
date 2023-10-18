"use client"

import { motion as m } from "framer-motion";
import { iconMap } from "@/constants";
import { unica_one } from "@/constants";

import Image from "next/image";


const fadeInAnimationVariants= {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

const Skills = () => {
  return (
    <section id="skills" className="bg-[#191923] md:px-20 py-5">
        <div className="p-4 md:p-8">
            <h2 className={`${unica_one.className} text-white text-[65px] lg:text-[165px] md:text-[117px] `}>My Skills</h2>
        <div className="max-w-[600px]">
            <div className="rounded-lg grid md:grid-cols-4 grid-cols-3 justify-center items-center gap-10 p-3 bg-[#403F4C]">
                {Object.entries(iconMap).map(([key, value], index) => (
                    <m.div key={key} className="flex flex-col justify-center items-center"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{once: true}}
                    >
                        <Image
                            src={value}
                            alt="skill icon"
                            width={36}
                            height={36}
                            />
                        <p className="capitalize text-white">{key}</p>
                    </m.div>
                ))}
            </div>
                </div>
        </div>
    </section>
  )
}

export default Skills
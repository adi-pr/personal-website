"use client";

import { motion as m } from "framer-motion";
import { Unica_One, Instrument_Sans } from "next/font/google";

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const AnimatedLine = ({ direction }: { direction: string }) => {
  const variants = {
    hidden: {
      width: "0vw",
      x: direction === "right" ? "-50vw" : "50vw",
    },
    visible: { width: "50vw" },
  };

  return (
    <m.div
      className="bg-white hidden md:block w-full h-[5px] rounded-lg mx-5"
      variants={variants}
      initial={"hidden"}
      whileInView={"visible"}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.5,
      }}
      viewport={{ once: true }}
    />
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-[#191923] md:px-20 py-5">
      <div className="p-4 md:p-8 ">
        <div className="flex justify-between items-center">
          <AnimatedLine direction="left" />
          <m.h2
            className={`${unica_One.className} text-white text-[65px]  lg:text-[60px] md:text-[45px]`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            whileInView="visible"
            initial="hidden"
            transition={{
              ease: "easeInOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            Contact
          </m.h2>
          <AnimatedLine direction="right" />
        </div>

        <div className={`${instrument_sans.className} text-white flex flex-col gap-3 justify-between`}>
          <p className="text-gray-600">Write me an e-mail at:</p>
          <h3 className="text-xl lg:text-3xl md:text-2xl">adityaprasad883+contact@gmail.com</h3>
        </div>
      </div>
    </section>
  );
};

export default Contact;

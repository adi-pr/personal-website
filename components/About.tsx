"use client";

import { Staatliches, Unica_One } from "next/font/google";

import { motion as m } from "framer-motion";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <section className="bg-[#191923] md:px-20  py-5">
      <BgParticles />
      <m.div
        className="md:flex-row justify-between p-4  md:p-8"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        transition={{
          duration: 0.25,
          delay: 0.5,
        }}
      >
        <div className="w-full ">
          <h2
            className={`${staatliches.className} text-[16px] text-[#F39237] lg:text-[16px] md:text-[16px]`}
          >
            Pursuing
          </h2>
          <div className="max-w-[600px]">
            <h3
              className={`${unica_One.className} text-white sm:text-[32px] md:text-[50px] mt-5`}
            >
              I study computer science at the University of Guyana, to transform
              into an exceptional software engineer.
            </h3>
          </div>
        </div>
      </m.div>
    </section>
  );
};

export default About;

const BgParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <div className="w-full relative">
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

"use client"

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="text-[5rem] md:text-[5rem]">
      <motion.div style={{ x }}>
        <div className="whitespace-nowrap">
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
            <span>{children} </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollingText() {
  return (
    <section className="absolute opacity-60 flex flex-col justify-between h-full items-center ">
      {/* <ParallaxText baseVelocity={3}>Aditya Prasad</ParallaxText> */}
      <ParallaxText baseVelocity={3}>Full Stack JavaScript Developer • Student • Guru •</ParallaxText>
      <ParallaxText baseVelocity={-3}>Full Stack JavaScript Developer • Student • Guru •</ParallaxText>
    </section>
  );
}

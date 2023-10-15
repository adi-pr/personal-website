"use client"

import { useRef, useState, useEffect } from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "../public/animation_lnqx659d.json";

const ArrowAnimation = ({ onHover }: { onHover: boolean }) => {
  const arrowRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (onHover) {
      arrowRef.current?.setSpeed(1.8);
      arrowRef.current?.play();
    } else {
      arrowRef.current?.stop();
    }
  }, [onHover]);

  return (
    <div className="-rotate-90 w-[60px] h-[60px]">
      <Lottie
      loop={false}
        lottieRef={arrowRef}
        animationData={animationData}
      />
    </div>
  );
};

const ProjectWrapper = ({ value }: { value: number }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className="flex justify-between items-center border-2 p-3 rounded-lg z-0 bg-[#191923] text-white w-full"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <p>Project {value}</p>
      <ArrowAnimation onHover={onHover} />
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#191923] md:px-20 py-5 w-full z-50">
      <div className="p-4 md:p-8 flex flex-col gap-5 h-full w-full text-white">
        {[1, 2, 3].map((projectNumber) => (
          <ProjectWrapper key={projectNumber} value={projectNumber} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

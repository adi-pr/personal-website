"use client";

import { useRef, useState, useEffect } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../public/animation_lnqx659d.json";

import { projectData } from "@/constants";

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
    <div className="-rotate-90 w-[70px] h-[70px]">
      <Lottie loop={false} lottieRef={arrowRef} animationData={animationData} />
    </div>
  );
};

const ProjectWrapper = ({
  value,
  name,
  link,
}: {
  value: number;
  name: string;
  link: string;
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className="z-0 md:w-[500px]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className="flex justify-between items-center border-[1px] p-3 rounded-xl  bg-[#191923] text-white w-full"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div>
            <p className="text-xl">Project {value}</p>
            <p className="text-sm text-gray-400">{name}</p>
          </div>
          <ArrowAnimation onHover={onHover} />
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#191923] md:px-20 py-5 w-full z-50">
      <div className="p-4 md:p-8 flex flex-wrap md:flex-row justify-between flex-col gap-5 h-full w-full text-white">
        {projectData.map((project) => (
          <ProjectWrapper
            key={project.number}
            value={project.number}
            name={project.name}
            link={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

"use client"

import { Instrument_Sans, Unica_One } from "next/font/google";

import CountUp from 'react-countup';

const instrument_sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const BigText = ({ text, subtext }: { text: number, subtext: string }) => {
   return (
    <div className="py-4 md:p-0">
        <h2 className={`${unica_One.className} text-white text-[32px]`}><CountUp start={0} end={text} duration={2.75} enableScrollSpy={true} /></h2>
        <p className={`${instrument_sans.className} text-base text-[#F39237]`}>{subtext}</p>
    </div>
   )
};

const Hobbies = () => {
  return (
    <section className="bg-[#191923] md:px-20 py-5">
      <div className="p-4 md:p-8 flex flex-col gap-10">
        <h2 className={`${unica_One.className} text-white text-[48px]`}>
          Hobbies & Interests
        </h2>
        <h3
          className={`${instrument_sans.className} max-w-[500px] relative text-[#F39237]`}
        >
          Besides coding, I am an Anime aficionado, coffee connoisseur, music
          maven, and programming prodigy.
        </h3>
        <div className="max-w-[600px]">
          <div className="sm:flex justify-between">
            <BigText text={100} subtext="Animes Watched" />
            <BigText text={2500} subtext="Coffee Cups" />
            <BigText text={999} subtext="Songs Loved" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;

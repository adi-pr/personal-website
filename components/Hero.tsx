import { Staatliches } from "next/font/google"
import Image from "next/image";

const staatliches = Staatliches({ subsets: ["latin"], weight: ['400'] });

const Hero = () => {
  return (
    <section className={`${staatliches.className} bg-[#191923] text-white w-full h-full sm:h-[1fr] sm:w-[1fr] flex justify-center items-center absolute`}>
      <div className="max-w-[1000px] lg:text-[80px] md:text-[64px] text-[32px] flex flex-col items-center">
        <Image 
          src="/hero-icon.svg"
          alt="Hero Icon"
          width={80}
          height={80}
        /> 
        <div>
          <p>ADITYA PRASAD:</p>
        </div>
        <div className="text-[#191923] bg-white rounded-2xl px-4">
          <p>THE CODE WIZARD</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
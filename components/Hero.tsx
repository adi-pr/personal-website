import { Staatliches } from "next/font/google"
import Image from "next/image";

const staatliches = Staatliches({ subsets: ["latin"], weight: ['400'] });

const Hero = () => {
  return (
    <section className={`${staatliches.className} bg-[#191923] text-white w-full h-[50vh] md:h-[100vh] landscape:h-[100vh] flex justify-center items-center relative`}>
      <div className="max-w-[1000px] lg:text-[80px] md:text-[64px] text-[32px] flex flex-col items-center">
        <Image 
          src="/hero-icon.svg"
          alt="Hero Icon"
          width={80}
          height={80}
          className="object-contain"
        /> 
        <div>
          <p>ADITYA PRASAD:</p>
        </div>
        <div className="text-[#191923] bg-[#F39237] rounded-2xl px-4">
          <p>THE CODE WIZARD</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
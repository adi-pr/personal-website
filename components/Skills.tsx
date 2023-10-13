import { Unica_One } from "next/font/google";

const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const Skills = () => {
  return (
    <section className="bg-[#191923] md:px-20 py-5">
        <div className="p-4 md:p-8">
            <h2 className={`${unica_One.className} text-white text-[65px] lg:text-[165px] md:text-[117px] `}>My Skills</h2>
        </div>
    </section>
  )
}

export default Skills
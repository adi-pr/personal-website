import { Staatliches, Unica_One } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: ["400"] });
const unica_One = Unica_One({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <section className="bg-[#191923] md:px-20  py-5">
      <div className="md:flex-row justify-between p-4  md:p-8">
          <div className="w-full ">
            <h2 className={`${staatliches.className} text-[16px] text-[#F39237] lg:text-[16px] md:text-[16px]`}>Pursuing</h2>
            <div className="max-w-[600px]">
              <h3 className={`${unica_One.className} text-white sm:text-[32px] md:text-[50px] mt-5`}>
              I study computer science at the University of Guyana, to transform into an exceptional software engineer.
              </h3>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;

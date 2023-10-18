import { unica_one } from "@/constants";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#191923] md:px-20 py-5">
      <div className="flex justify-between items-center px-3">
        <div className="bg-white w-full h-[5px]" />
        <h2
          className={`${unica_one.className} text-white text-[30px] lg:text-[60px] md:text-[45px] m-5`}
        >
          Contact
        </h2>
        <div className="bg-white w-full h-[5px]" />
      </div>
    </section>
  );
};

export default Contact;

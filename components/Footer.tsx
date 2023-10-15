import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#191923] border-t-[1px] border-gray-500 text-white md:px-20 py-5 overflow-hidden">
      <div className="flex flex-col items-center w-full">
        <ul className="flex justify-center gap-20 items-center">
          <li>
            <a href="https://github.com/adi-pr">
              <Image
                src="/icons/icons8-github.svg"
                alt="Github Icon"
                width={32}
                height={32}
              />
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/aditya-prasad-325522243/">
            <Image
                src="/icons8-linkedin.svg"
                alt="Linkedin Icon"
                width={32}
                height={32}
              />
          </a>
          </li>
          <li>
          <a href="https://www.facebook.com/profile.php?id=100082532321491">
            <Image
                src="/icons8-facebook.svg"
                alt="Linkedin Icon"
                width={32}
                height={32}
              />
          </a>
          </li>
        </ul>
        <div className="m-2 text-gray-400">
          <p>&copy; Aditya (Ruben) Prasad. All Rights reserved </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import { GitBranchIcon, Instagram } from "lucide-react";
import { x, instagram, discord, github } from "@/../public/Social Media Icons";

function Footer() {
  return (
    <div className="flex gap-20 px-[7.5rem] py-20 border-b border-white/25 justify-center bg-[#141414] w-full">
      <div className="w-1/3 h-full flex justify-start place-items-start">
        <h2 className="font-semibold text-base text-white">
          <span className="font-normal text-base text-white/85">Designed & Developed by </span>Hasan
          Khan.
        </h2>
      </div>
      <div className="w-1/3 h-full flex justify-center place-items-start">
        <ul className="flex flex-col gap-3">
          <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            About Me
          </li>
          <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            Book Recommendations
          </li>
          <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            Skills
          </li>
          <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            Case Studies
          </li>
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-start place-items-end gap-8">
        <h2 className="font-semibold text-xl">Socials</h2>
        <div className="flex gap-8">
          <Image
            src={github}
            alt="github icon"
            width={32}
            height={32}
            className="opacity-75 hover:opacity-100 duration-200"
          />
          <Image
            src={discord}
            alt="discord icon"
            width={32}
            height={32}
            className="opacity-75 hover:opacity-100 duration-200"
          />
          <Image
            src={instagram}
            alt="instagram icon"
            width={32}
            height={32}
            className="opacity-75 hover:opacity-100 duration-200"
          />
          <Image
            src={x}
            alt="x icon"
            width={32}
            height={32}
            className="opacity-75 hover:opacity-100 duration-200"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

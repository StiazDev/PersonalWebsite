import React from "react";
import Image from "next/image";
import Link from "next/link";
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
          <Link href={"/#about"}>
            <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
              About Me
            </li>
          </Link>
          <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            Book Recommendations
          </li>
          <Link href={"/#skills"}>
            <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
              Skills
            </li>
          </Link>
          <Link href={"/#casestudies"}>
            <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
              Case Studies
            </li>
          </Link>
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-start place-items-end gap-8">
        <h2 className="font-semibold text-xl">Socials</h2>
        <div className="flex gap-8">
          <Link href={"https://github.com/StiazDev"} target="_blank" rel="noopener noreferrer">
            <Image
              src={github}
              alt="github icon"
              width={32}
              height={32}
              className="opacity-75 hover:opacity-100 duration-200"
            />
          </Link>
          <Link
            href={"https://discord.com/users/722131267449126954"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={discord}
              alt="discord icon"
              width={32}
              height={32}
              className="opacity-75 hover:opacity-100 duration-200"
            />
          </Link>
          <Link
            href={"https://www.instagram.com/hasan_stiaz/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={instagram}
              alt="instagram icon"
              width={32}
              height={32}
              className="opacity-75 hover:opacity-100 duration-200"
            />
          </Link>
          <Link href={"http://x.com/Hasan_Stiaz"} target="_blank" rel="noopener noreferrer">
            <Image
              src={x}
              alt="x icon"
              width={32}
              height={32}
              className="opacity-75 hover:opacity-100 duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex gap-5 px-[7.5rem] py-6 border-b border-white/25 place-items-center justify-center bg-[#0e0e0e]">
      <div className="flex place-items-center w-1/3 justify-start">
        <h2 className="font-semibold text-base text-white">
          Hasan Khan <span className="font-normal text-base text-white/65">AKA HasanStiaz</span>
        </h2>
      </div>
      <div className="flex place-items-center w-1/3 justify-center">
        <ul className="flex gap-8 place-items-center">
          <Link href={"/"}>
            <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
              Home
            </li>
          </Link>
          <Link href={"/#about"}>
            <li className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
              About Me
            </li>
          </Link>
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
      <div className="flex place-items-center w-1/3 justify-end">
        <Link href={"mailto:hasankhanwebdev@gmail.com"} target="_blank" rel="noopener noreferrer">
          <p className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200">
            hasankhanwebdev@gmail.com
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;

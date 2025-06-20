"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GitBranchIcon, Instagram } from "lucide-react";
import { x, instagram, discord, github } from "@/../public/Social Media Icons";
import UseAnimations from "react-useanimations";
import githubfooter from "react-useanimations/lib/github";
import instagramfooter from "react-useanimations/lib/instagram";
import linkedinfooter from "react-useanimations/lib/linkedin";
import twitterfooter from "react-useanimations/lib/twitter";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="flex gap-20 px-[7.5rem] py-20 border-b border-white/25 justify-center bg-[#141414] w-full md:px-[3.75rem] md:gap-16 md:flex-col md:justify-center lg:flex-row 2xs:flex-col 2xs:px-6">
      <div className="w-1/3 h-full flex justify-start place-items-start md:w-full md:justify-start md:place-items-start 2xs:w-full">
        <h2 className="font-semibold text-base text-white">
          <span className="font-normal text-base text-white/85">Designed & Developed by </span>Hasan
          Khan.
        </h2>
      </div>
      <div className="w-1/3 h-full flex justify-center place-items-start md:w-full md:justify-start md:place-items-start md:flex-col lg:place-items-center 2xs:w-full 2xs:flex-col">
        <h2 className="font-semibold text-xl">Links</h2>
        <ul className="flex flex-col gap-3 place-items-center 2xs:place-items-start">
          <Link href={"/book-recommendations"}>
            <motion.li
              whileHover={{ letterSpacing: "0.1em", scale: 1.1, horizOriginX: 0 }}
              transition={{ duration: 0.075, type: "tween" }}
              className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200 py-2 px-1"
            >
              Book Recommendations
            </motion.li>
          </Link>
          <Link href={"/#skills"}>
            <motion.li
              whileHover={{ letterSpacing: "0.1em", scale: 1.1, horizOriginX: 0 }}
              transition={{ duration: 0.075, type: "tween" }}
              className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200 py-2 px-1"
            >
              Skills
            </motion.li>
          </Link>
          <Link href={"/#casestudies"}>
            <motion.li
              whileHover={{ letterSpacing: "0.1em", scale: 1.1, horizOriginX: 0 }}
              transition={{ duration: 0.075, type: "tween" }}
              className="font-semibold text-base text-white/85 hover:text-[#FFDE5B] duration-200 py-2 px-1"
            >
              Case Studies
            </motion.li>
          </Link>
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-col justify-start place-items-end gap-8 md:w-full md:justify-start md:place-items-start lg:place-items-end 2xs:w-full 2xs:place-items-start">
        <h2 className="font-semibold text-xl">Socials</h2>
        <div className="flex gap-8 md:gap-4">
          <Link
            href={"https://github.com/StiazDev"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg hover:bg-white/15 duration-75 p-2"
          >
            <UseAnimations animation={githubfooter} size={32} strokeColor="#f0f0f0" speed={1.15} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/hasanstiaz/"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg hover:bg-white/15 duration-75 p-2"
          >
            <UseAnimations
              animation={linkedinfooter}
              size={32}
              strokeColor="#f0f0f0"
              speed={1.15}
            />
          </Link>
          <Link
            href={"https://www.instagram.com/hasan_stiaz/"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg hover:bg-white/15 duration-75 p-2"
          >
            <UseAnimations
              animation={instagramfooter}
              size={32}
              strokeColor="#f0f0f0"
              speed={1.15}
            />
          </Link>
          <Link
            href={"http://x.com/Hasan_Stiaz"}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg hover:bg-white/15 duration-75 p-2"
          >
            <UseAnimations animation={twitterfooter} size={32} strokeColor="#f0f0f0" speed={1.15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

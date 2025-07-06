"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
// Images
import ServrBillPic from "@/../public/Landing Page/CaseStudy Images/ServrBill CaseStudy Picture.png";

function page() {
  return (
    <motion.div
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { type: "tween", duration: 0.3 } }}
    >
      {/* Intro */}
      <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12 md:px-[3.75rem] md:gap-8 xl:px-[5rem] 2xl:px-[7.5rem] 2xl:gap-12 2xs:px-6 2xs:py-10">
        <Image
          src={ServrBillPic}
          alt="Header Photo"
          className="w-3/4 h-fit aspect-video rounded-lg md:w-full xl:w-3/4 2xs:w-full"
        />
        <div className="w-full flex gap-12 md:flex-col md:gap-16 lg:flex-row lg:gap-8 2xl:gap-12 2xs:flex-col 2xs:gap-16">
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <div className="flex flex-col gap-2 md:gap-1 xl:gap-2 2xs:gap-1">
              <h2 className="font-bold text-base">ServrBill</h2>
              <p className="font-normal text-base text-white/75">May 2025 - Present</p>
            </div>

            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Role:</span> Full-Stack Developer, Founder,
              UI/UX Designer, Sales, Marketing.
            </p>
            <Link href={"https://servr-bill.vercel.app/"} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.075, ease: "easeInOut" }}
                className={
                  "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-6 md:py-3 xl:px-8 xl:py-3 xl:text-base"
                }
              >
                Visit ServrBill{" "}
                <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
              </motion.button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <p className="font-normal text-base text-white/75">
              ServrBill is a Restaurant Management Software. It simplifies the process of billing
              and calculates the profits so you don't have to touch your messy register ever again.
            </p>
            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Company Size:</span> 1 person.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <p className="font-normal text-base text-white/75">
              Implemented Front-End in NextJS with Hero UI and TailwindCSS. Designed UI in Figma,
              Backend & Database in Supabase (using PostgreSQL). Sold to real restaurants.
            </p>
            <h3 className="font-semibold text-base">My Collaborators:</h3>
            <ul className="font-medium text-base text-white/85 list-disc">
              <li>Hasan Khan (Founder/ Me).</li>
            </ul>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12 md:px-[3.75rem] md:gap-8 md:place-items-start lg:place-items-center xl:px-[5rem] 2xl:xl-[7.5rem] 2xl:gap-12 2xs:px-6 2xs:py-10 2xs:place-items-start">
          <h1 className="font-bold text-4xl md:text-2xl md:text-start md:w-fit lg:text-center xl:text-3xl 2xl:text-4xl 2xs:text-2xl">
            CaseStudy is being prepared currently, checkout other casestudes in the meantime {":)"}
          </h1>
          <Link href={"/#casestudies"}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.075, ease: "easeInOut" }}
              className={
                "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-6 md:py-3 xl:px-8 xl:py-3 xl:text-base"
              }
            >
              Check Out Other Case Studies
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default page;

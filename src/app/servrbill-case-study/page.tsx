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
      animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }}
    >
      {/* Intro */}
      <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12">
        <Image
          src={ServrBillPic}
          alt="Header Photo"
          className="w-3/4 h-fit aspect-video rounded-lg"
        />
        <div className="w-full flex gap-12">
          <div className="w-1/3 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
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
                  "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30"
                }
              >
                Visit ServrBill{" "}
                <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
              </motion.button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-8">
            <p className="font-normal text-base text-white/75">
              ServrBill is a Restaurant Management Software. It simplifies the process of billing
              and calculates the profits so you don't have to touch your messy register ever again.
            </p>
            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Company Size:</span> 1 person.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-8">
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
      <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12">
        <h1 className="font-bold text-4xl">
          CaseStudy is being prepared currently, checkout other casestudes in the meantime {":)"}
        </h1>
        <Link href={"/#casestudies"}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.075, ease: "easeInOut" }}
            className={
              "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30"
            }
          >
            Case Studies{" "}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default page;

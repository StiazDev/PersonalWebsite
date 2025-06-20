"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const [isHome, setIsHome] = useState(pathname === "/");

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: false }}
    >
      <div className="flex gap-5 px-[7.5rem] py-3 border-b border-white/25 place-items-center justify-center bg-[#0e0e0e] md:px-[3.75rem] md:py-2 md:gap-3 xl:px-[5rem] xl:py-3 2xl:px-[7.5rem] ">
        <div className="flex place-items-center w-1/3 justify-start">
          <h2 className="font-semibold text-base text-white md:text-sm xl:text-base ">
            Hasan Khan <span className="font-normal text-base text-white/65">AKA HasanStiaz</span>
          </h2>
        </div>
        <div className="flex place-items-center w-1/3 justify-center">
          <ul className="flex gap-8 place-items-center md:gap-3 xl:gap-6">
            <Link href={"/"}>
              <motion.li
                whileHover={{
                  color: "#FFDE5B",
                  y: -5,
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
                animate={{
                  y: 0,
                  transition: { duration: 0.1, ease: "easeInOut" },
                }}
                whileTap={{
                  textDecoration: "underline 2px",
                  transition: { ease: "easeInOut", duration: 0.1 },
                }}
                className={
                  isHome
                    ? "font-semibold text-base text-[#FFDE5B] p-3 md:p-1 md:text-sm xl:text-base"
                    : "font-semibold text-base text-white/85 p-3 md:p-1 md:text-sm xl:text-base"
                }
              >
                Home
              </motion.li>
            </Link>
            <Link href={"/#skills"}>
              <motion.li
                whileHover={{
                  color: "#FFDE5B",
                  y: -5,
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
                animate={{
                  y: 0,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                className="font-semibold text-base text-white/85 p-3 md:p-1 md:text-sm xl:text-base"
              >
                Skills
              </motion.li>
            </Link>
            <Link href={"/#casestudies"}>
              <motion.li
                whileHover={{
                  color: "#FFDE5B",
                  y: -5,
                  transition: { duration: 0.1, ease: "easeIn" },
                }}
                animate={{
                  y: 0,
                  transition: { duration: 0.2, ease: "easeInOut" },
                }}
                className="font-semibold text-base text-white/85 p-3 md:p-1 md:text-sm xl:text-base"
              >
                Case Studies
              </motion.li>
            </Link>
          </ul>
        </div>
        <div className="flex place-items-center w-1/3 justify-end">
          <Link href={"mailto:hasankhanwebdev@gmail.com"} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.075, ease: "easeInOut" }}
              className="bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-6 md:py-3 xl:px-8 xl:py-3 xl:text-base"
            >
              Let's connect{" "}
              <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;

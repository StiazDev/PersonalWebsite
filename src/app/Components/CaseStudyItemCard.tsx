"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
import { motion } from "motion/react";
import Link from "next/link";

interface IComponentPorps {
  CaseStudyImg: any;
  CompanyName: string;
  Description: string;
  Role: string;
  CaseStudyLink: string;
  leaveTransition: any;
}
function CaseStudyItemCard(props: IComponentPorps) {
  const [buttonVisible, setButtonVisible] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => {
        setButtonVisible(false);
      }}
    >
      <Image
        src={props.CaseStudyImg}
        alt="casestudy image"
        className="w-full h-fit aspect-video rounded-lg border border-white/25 z-0"
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-white leading-[150%] text-pretty tracking-wider">
          {props.CompanyName}
        </h2>
        <p className="text-base font-normal text-white/85 leading-[165%] text-pretty tracking-wider">
          {props.Description}
        </p>
      </div>
      <p className="text-base font-medium text-white/90 leading-[165%] text-pretty tracking-wider">
        Role: {props.Role}
      </p>
      <Link href={props.CaseStudyLink}>
        <motion.button
          className={
            "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 leading-[165%] text-pretty tracking-wider"
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.075, ease: "easeInOut" }}
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={buttonVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.75 }}
          onClick={props.leaveTransition}
        >
          Read About {props.CompanyName}{" "}
          <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
        </motion.button>
      </Link>
    </div>
  );
}

export default CaseStudyItemCard;

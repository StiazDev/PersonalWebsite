"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface IComponentPorps {
  CaseStudyImg: any;
  CompanyName: string;
  Description: string;
  Role: string;
  CaseStudyLink: string;
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
        <h2 className="text-base font-semibold text-white">{props.CompanyName}</h2>
        <p className="text-base font-normal text-white/85">{props.Description}</p>
      </div>
      <p className="text-base font-medium text-white/90">Role: {props.Role}</p>
      <Link href={props.CaseStudyLink}>
        <motion.button
          className={
            "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30"
          }
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={
            buttonVisible
              ? { opacity: 1, transition: { duration: 0.2 }, scale: 1 }
              : { opacity: 0, scale: 0.75 }
          }
        >
          Visit {props.CompanyName} <ArrowUpRight size={20} />
        </motion.button>
      </Link>
    </div>
  );
}

export default CaseStudyItemCard;

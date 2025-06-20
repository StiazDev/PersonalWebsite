"use client";
import Image from "next/image";
import React from "react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
import { motion } from "motion/react";
import Link from "next/link";

interface IComponentPorps {
  bookCover: string;
  bookTitle: string;
  bookURL: string;
}
function BookCard(props: IComponentPorps) {
  return (
    <div className="bg-[#222] rounded-lg border border-white/25 px-5 py-3 flex flex-col gap-4">
      <Image
        src={props.bookCover}
        alt={props.bookTitle}
        width={720}
        height={1280}
        className=" w-full aspect-auto h-fit rounded-lg "
      />
      <h3 className="font-bold text-xl">{props.bookTitle}</h3>
      <Link href={props.bookURL} target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.1, horizOriginX: 0, vertOriginX: 0 }}
          whileTap={{ scale: 0.95, horizOriginX: 0, vertOriginX: 0 }}
          transition={{ duration: 0.075, ease: "easeInOut" }}
          className="flex gap-2 place-items-center px-3 py-1 bg-white rounded-full text-black w-fit font-medium text-base hover:bg-[#FFDE5B] hover:text-black duration-200 "
        >
          Read This Book{" "}
          <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
        </motion.button>
      </Link>
    </div>
  );
}

export default BookCard;

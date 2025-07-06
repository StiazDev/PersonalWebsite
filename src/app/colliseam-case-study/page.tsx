"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
import { motion } from "motion/react";

// Images
import ColliseamPic from "@/../public/Landing Page/CaseStudy Images/Colliseam CaseStudy picture.png";
import CaseStudyImg1 from "@/../public/CaseStudies/Colliseam/Final Version.png";
import CaseStudyImg2 from "@/../public/CaseStudies/Colliseam/Colliseam Messages Page.png";

function page() {
  return (
    <motion.div
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { type: "tween", duration: 0.3 } }}
    >
      {/* Intro */}
      <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12 md:px-[3.75rem] md:gap-8 xl:px-[5rem] 2xl:px-[7.5rem] 2xl:gap-12 2xs:px-6 2xs:py-10 ">
        <Image
          src={ColliseamPic}
          alt="Header Photo"
          className="w-3/4 h-fit aspect-video rounded-lg md:w-full xl:w-3/4 2xs:w-full"
        />
        <div className="w-full flex gap-12 md:flex-col md:gap-16 lg:flex-row lg:gap-8 2xl:gap-12 2xs:flex-col 2xs:gap-16">
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <div className="flex flex-col gap-2 md:gap-1 xl:gap-2 2xs:gap-1">
              <h2 className="font-bold text-base">Colliseam (Formerly Nexus)</h2>
              <p className="font-normal text-base text-white/75">September 2024 - April 2025</p>
            </div>

            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Role:</span> Front-End Developer
            </p>
            <Link href={"https://colliseam.com/"} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.075, ease: "easeInOut" }}
                className={
                  "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-6 md:py-3 xl:px-8 xl:py-3 xl:text-base"
                }
              >
                Visit Colliseam{" "}
                <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
              </motion.button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <p className="font-normal text-base text-white/75">
              Colliseam is a platform which connects young developers and designer so they can
              collaborate on projects and build a portfolio and learn skills.
            </p>
            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Company Size:</span> 9 people.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8 2xs:w-full 2xs:gap-4">
            <p className="font-normal text-base text-white/75">
              Implemented UI in Next.JS which was pixel perfect to the design. Worked closely with
              the Product manager and the founder.
            </p>
            <h3 className="font-semibold text-base">My Collaborators:</h3>
            <ul className="font-medium text-base text-white/85 list-disc">
              <li>Shining Yu (Product Manager).</li>
              <li>Abraham (Founder). </li>
              <li>Ayan Nagori (Lead Front-End Developer).</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Landing Page Explaination */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-20 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-10 md:flex-col-reverse lg:flex-row xl:px-[5rem] xl:gap-14 2xl:px-[7.5rem] 2xl:gap-20 2xs:px-6 2xs:py-10 2xs:flex-col-reverse ">
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2 2xs:w-full 2xs:gap-16 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Landing Page</h2>
              <p className="font-normal text-base text-white/75">
                When I first joined Colliseam I had no knowledge of React or Tailwind and other
                things required to work on a software. I spent a week learning React.JS from a
                playlist the Lead Front-End Developer sent me, he helped me make github and learn
                how to setup git. I learned TailwindCSS by using it mostly.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Starting to Implement the Landing Page Deisgn:</h2>
              <p className="font-normal text-base text-white/75">
                Before I make any real progress I tent to make the layout first, and that’s exactly
                what I did her as well. After I was done with the layout of the page I moved to work
                on each section one at a time. I primarily relied on HTML + TailwindCSS to make the
                entire landing page in Next.JS, but soon I had to make carousels.
                <br />
                <br />
                Since I have never made carousels in a custom website (only WordPress), I felt
                overwhelmed but I moved forward and found out about Embla Carousel. I have never
                used any UI library or anything so it was really new to me. But I made it work and
                the Founder & the Front-End was impressed that I managed to do this on my own
                (looking back it was not a big deal at all).
                <br />
                <br />
                As I moved to later sections I had to add accordions. Since the software’s UI was
                using Hero UI (Formerly extUI), I just picked up how to use it from the
                documentation and added the elements and adjusted styling to match the Design.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">
                Iterating on Landing Page to make it “Pixel Perfect”:
              </h2>
              <p className="font-normal text-base text-white/75">
                I spent the next 2 days after finishing the landing page making finer details with
                Shining Yu (Product Managaer & Head Designer), he would point out imperfections and
                I would fix it.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Using GSAP for adding a Text Fill on Scroll:</h2>
              <p className="font-normal text-base text-white/75">
                There were 2 sections which required this animation, since I knew GSAP because of my
                interest in making UIs more interactive, it wasn’t too hard for me to implement. But
                my implementation got polished by Ayan Nagori (Lead Front-End) developer in the
                future.
              </p>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2 2xs:w-full 2xs:gap-16">
            <Image
              src={CaseStudyImg1}
              alt="Colliseam Landing Page"
              className="w-full rounded-lg border border-white/25"
            />
          </div>
        </div>
      </motion.div>
      {/* Other Explaination */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-20 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-10 md:flex-col-reverse lg:flex-row xl:px-[5rem] xl:gap-14 2xl:px-[7.5rem] 2xl:gap-20 2xs:px-6 2xs:py-10 2xs:flex-col-reverse ">
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2 2xs:w-full 2xs:gap-16  ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Messages Page:</h2>
              <p className="font-normal text-base text-white/75">
                On the Messages page the work I did was mostly fixing up design problems where
                Shining Yu would point out a problem and I would fix the front-end.
                <br />
                <br />
                For Example:
                <br />
                Making the elements consistent throughout the whole app. Like the SearchBar,
                Buttons, etc.
              </p>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2 2xs:w-full 2xs:gap-16  ">
            <Image
              src={CaseStudyImg2}
              alt="Colliseam Messages Page"
              className="w-full rounded-lg border border-white/25"
            />
          </div>
        </div>
      </motion.div>
      {/* Summary */}
      <div className="flex gap-12 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-6 xl:px-[5rem] xl:gap-8 2xl:px-[7.5rem] 2xl:gap-12 2xs:px-6 2xs:py-10  ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Summary:</h2>
              <p className="font-normal text-base text-white/75">
                Most of the work I took care of at Colliseam was fixing front-end implementations
                and make the design pixel perfect. There isn’t many things I crafted from scratch in
                this software but I learned a lot because of it. Colliseam was my golden ticket to
                learning React (something I had been hearing about a lot at that time which made me
                curious about it). I learned how to work async with a team around the globe and
                learned something from almost every memeber working on the software.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Skills Learned: */}
      <div className="flex gap-12 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-6 xl:px-[5rem] xl:gap-8 2xl:px-[7.5rem] 2xl:gap-12 2xs:px-6 2xs:py-10  ">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Skills Learned:</h2>
              <ul className="font-medium text-base text-white/85 list-disc">
                <li>Collaboration with a diverse team working on a single project.</li>
                <li>React JS</li>
                <li>TailwindCSS</li>
                <li>Hero UI</li>
                <li>Embla Carousel</li>
                <li>NextJS (A full-stack framework for React)</li>
                <li>Figma</li>
                <li>Version Control with Git & Github</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default page;

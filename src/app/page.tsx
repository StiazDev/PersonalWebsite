"use client";
import Image from "next/image";
import ScrollDown from "react-useanimations/lib/scrollDown";
import arrowUp from "react-useanimations/lib/arrowUp";
import UseAnimations from "react-useanimations";
import { Tooltip } from "@heroui/react";
import PortfolioImg from "@/../public/Landing Page/portfolioImg.jpg";
import { motion } from "motion/react";
import Link from "next/link";
import {
  css3,
  html5,
  figma,
  github,
  git,
  nextjs,
  postgresql,
  supabase,
  typescript,
  tailwindcss,
  vercel,
} from "@/../public/Landing Page/Skills SVGs";
import { electron, flutter } from "@/../public/Landing Page/Learning SVGs";
import CaseStudyItemCard from "./Components/CaseStudyItemCard";
import { BreakTheSlack, Colliseam, ServrBill } from "@/../public/Landing Page/CaseStudy Images";
import { useState } from "react";

export default function Home() {
  const [homeHere, setHomeHere] = useState(true);

  const ChangeHomeHere = () => {
    setHomeHere(!homeHere);
  };
  return (
    <motion.div
      initial={{ x: "-100vh", opacity: 0 }}
      animate={
        homeHere
          ? { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }
          : { x: "100vh", opacity: 0, transition: { type: "spring", stiffness: 80 } }
      }
    >
      {/* About Me */}
      <div id="about" className="px-[7.5rem] py-20 flex gap-16 h-full">
        <div className="w-1/2 min-h-full flex flex-col gap-12 justify-center">
          <div className="flex flex-col gap-2">
            <p className="text-[#FFDE5B] text-base font-medium">Hey there</p>
            <div className="flex flex-col gap-8">
              <h1 className="text-white text-5xl leading-[105%] font-bold">
                I am Hasan Khan, I am a Full-Stack Developer who ships softwares & features to users
                within weeks
              </h1>
              <p className="text-white/85 font-normal text-base leading-[165%] text-pretty tracking-wider ">
                I like to blitz scale the softwares or features I work on, I believe that spending
                months on something that might has a possibility to not be as great to the company
                is a waste of time & resources. This is why I blitz scale, making sure my work is
                highly optimized for a large amount of users and the quality of my code is
                top-notch.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <Link href={"/#casestudies"}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.075, ease: "easeInOut" }}
                className="bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30"
              >
                Read My Case Studies
              </motion.button>
            </Link>
            <Link
              href={"mailto:hasankhanwebdev@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.075, ease: "easeInOut" }}
                className="bg-[#FFDE5B] px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#F5C400] hover:text-black duration-200 z-30"
              >
                Let's connect{" "}
                <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
              </motion.button>
            </Link>
          </div>
          <div className="flex gap-1 place-items-center mt-[8rem] opacity-50">
            <UseAnimations animation={ScrollDown} size={32} strokeColor="#fff" speed={1.15} />
            <p className="text-sm font-medium">Scroll Down</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex place-items-center justify-center">
          <Image
            src={PortfolioImg}
            alt="Hasan Khan Picture"
            className="w-3/4 h-fit rotate-y-180 rounded-lg"
          />
        </div>
      </div>
      {/* <div id="about" className="px-[7.5rem] py-20 flex gap-16">
        <div className="flex gap-8 w-1/2">
          <Image src={PortfolioImg} alt="my-picture" className="w-1/3 h-fit rounded-full" />
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">About Me</h2>
            <p className="font-normal text-base text-white/85">
              Hello there, I am Hasan Khan. I am a Full-Stack developer proficient in HTML / CSS,
              TypeScript & PostgreSQL. I have a entrepreneurial mindset from the very beginning
              which led to me learn not only development but also design. From initially validating
              an idea to blitz-scaling with-in days. Sales? Yeah I have got that covered as well.
              Despite being good in all these areas (because as an entrepreneur all are necessary),
              my interest is mostly in developing software.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-1/2">
          <h2 className="font-semibold text-xl">Interests</h2>

          <ul className="font-normal text-base text-white/85 list-disc">
            <li>
              <span className="text-white font-semibold">Reading Books</span> (I love reading
              Psychology, & books that help me become better in a specific area.)
            </li>
            <li>
              <span className="text-white font-semibold">Designing</span> (I like to design things
              for fun when I am free.)
            </li>
            <li>
              <span className="text-white font-semibold">Digital Art</span> (From a very young age I
              have been doing digital art as a hobby. I like to use it to express my self.)
            </li>
            <li>
              <span className="text-white font-semibold">Working</span> (Yes, I know it’s a weird
              thing to put in my interests. But, I don’t like to waste time mostly because of my
              mindset. I can just keep on working haha.)
            </li>
            <li>
              <span className="text-white font-semibold">Driving</span> (This specific interest of
              mine is like an escape for me. I just love driving towards an unclear destination.
              Seeing the views and listening to chill music)
            </li>
          </ul>
        </div>
      </div> */}
      {/* Skills Section */}
      <div id="skills" className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-8xl text-white/35">Skills</h2>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="TypeScript"
          >
            <Image src={typescript} alt="typescript" width={64} height={64} />
          </Tooltip>

          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="TailwindCSS"
          >
            <Image src={tailwindcss} alt="tailwindcss" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Next.js"
          >
            <Image src={nextjs} alt="nextjs" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Supabase"
          >
            <Image src={supabase} alt="supabase" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="PostgreSQL"
          >
            <Image src={postgresql} alt="postgresql" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="HTML"
          >
            <Image src={html5} alt="html5" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="CSS"
          >
            <Image src={css3} alt="css3" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Vercel"
          >
            <Image src={vercel} alt="vercel" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Figma"
          >
            <Image src={figma} alt="figma" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Github"
          >
            <Image
              src={github}
              alt="github"
              width={64}
              height={64}
              className="bg-white rounded-full"
            />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Git"
          >
            <Image src={git} alt="git" width={64} height={64} />
          </Tooltip>
        </div>
      </div>
      {/* What I am Learning Section */}
      <div className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-8xl text-white/35">What I am currently learning</h2>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Electron"
          >
            <Image src={electron} alt="electronjs" width={64} height={64} />
          </Tooltip>
          <Tooltip
            color="default"
            className="bg-[#222] p-3 font-medium text-sm border border-white/15"
            placement={"bottom"}
            content="Flutter"
          >
            <Image src={flutter} alt="flutter" width={64} height={64} />
          </Tooltip>
        </div>
      </div>
      {/* CaseStudies Section */}
      <div id="casestudies" className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-8xl text-white/35">Case Studies</h2>
          {/* <p className="font-normal text-base text-white/85 leading-[165%] text-pretty tracking-wider">
            These are the products I have worked on so far. I have described what I have put to the
            table in each on them in breif details. ( If you are looking to hire this is what you
            were looking for :) ).
          </p> */}
        </div>
        <div className="grid grid-cols-3 gap-12">
          <CaseStudyItemCard
            CaseStudyImg={Colliseam}
            CompanyName="Colliseam (Formerly Nexus)"
            Description="A Platform which connects young designers & developers to work on projects."
            Role="Front-End Developer, Later Lead Marketer."
            CaseStudyLink="/colliseam-case-study"
            leaveTransition={ChangeHomeHere}
          />
          <CaseStudyItemCard
            CaseStudyImg={ServrBill}
            CompanyName="ServrBill"
            Description="Restaurant Billing Software."
            Role="Full-Stack, Designer, Sales, Founder."
            CaseStudyLink="/servrbill-case-study"
            leaveTransition={ChangeHomeHere}
          />
          <CaseStudyItemCard
            CaseStudyImg={BreakTheSlack}
            CompanyName="BreakTheSlack"
            Description="Task Accountability Software & Community for Aspiring Entrepreneurs."
            Role="Back-End, Designer, Founder, Marketing."
            CaseStudyLink="/breaktheslack-case-study"
            leaveTransition={ChangeHomeHere}
          />
        </div>
      </div>
    </motion.div>
  );
}

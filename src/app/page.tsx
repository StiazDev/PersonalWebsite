"use client";
import Image from "next/image";
import ScrollDown from "react-useanimations/lib/scrollDown";
import arrowDown from "react-useanimations/lib/arrowDown";
import arrowUp from "react-useanimations/lib/arrowUp";
import UseAnimations from "react-useanimations";
import { Tooltip } from "@heroui/react";
import PortfolioImg from "@/../public/Landing Page/portfolioImg.jpg";
import { motion, AnimatePresence } from "motion/react";
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
          ? { x: 0, opacity: 1, transition: { type: "tween", duration: 0.3 } }
          : { x: "100vh", opacity: 0, transition: { type: "tween", duration: 0.3 } }
      }
    >
      {/* About Me */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div
          id="about"
          className="px-[7.5rem] py-20 flex gap-16 h-[95vh] md:px-[3.75rem] md:gap-8 xl:px-[5rem] 2xl:px-[7.5rem] 2xs:px-6 2xs:py-10 2xs:flex-col 2xs:h-fit md:flex-row "
        >
          <div className="w-1/2 min-h-full flex flex-col gap-12 justify-center md:gap-6 2xl:gap-12 2xs:w-full 2xs:justify-start md:w-1/2">
            <div className="flex flex-col gap-2 md:gap-1 2xl:gap-2">
              <p className="text-[#FFDE5B] text-base font-medium md:text-sm xl:text-base 2xs:text-xs">
                Hey there
              </p>
              <div className="flex flex-col gap-8 md:gap-4">
                <h1 className="text-white text-5xl leading-[105%] font-bold md:text-3xl xl:text-4xl 2xl:text-5xl 2xs:text-2xl">
                  I am Hasan Khan, I am a Full-Stack Developer who ships within weeks
                </h1>
                <p className="text-white/85 font-normal text-base leading-[165%] text-pretty tracking-wider md:text-sm xl:text-base 2xs:text-base ">
                  I like to blitz-scale the software or features I work on. I believe that spending
                  months on something that might have a possibility not to be as great to the
                  company It is a waste of time & resources.
                </p>
              </div>
            </div>

            <div className="flex gap-8 md:gap-4 2xl:gap-8 2xs:flex-col 2xs:gap-4 md:flex-row">
              <Link href={"/#casestudies"}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.075, ease: "easeInOut" }}
                  className="bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-4 md:py-3 md:text-start xl:px-8 xl:py-3 xl:text-base"
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
                  className="bg-[#FFDE5B] px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#F5C400] hover:text-black duration-200 z-30 md:text-sm md:px-4 md:py-3 md:text-start xl:px-8 xl:py-3 xl:text-base"
                >
                  Let's connect{" "}
                  <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
                </motion.button>
              </Link>
            </div>
            <div className="flex gap-1 place-items-center mt-[8rem] opacity-50 md:mt-10 xl:mt-16 2xs:mt-4">
              <div className="flex gap-1 2xs:hidden md:flex">
                <UseAnimations animation={ScrollDown} size={32} strokeColor="#fff" speed={1.15} />
                <p className="text-sm font-medium">Scroll Down</p>
              </div>
              <div className="flex gap-1 2xs:flex 2xs:place-items-center md:hidden">
                <UseAnimations animation={arrowDown} size={32} strokeColor="#fff" speed={1.15} />
                <p className="text-sm font-medium">Swipe Down</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full flex place-items-center justify-center 2xs:hidden md:flex md:w-1/2 md:place-items-center md:min-h-full md:self-center">
            <Image
              src={PortfolioImg}
              alt="Hasan Khan Picture"
              className="w-3/4 h-fit rotate-y-180 rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div
        id="skills"
        className="px-[7.5rem] py-20 flex flex-col gap-8 md:px-[3.75rem] xl:px-[5rem] 2xl:px-[7.5rem] 2xs:px-6 2xs:py-10 "
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-8xl text-white/35 md:text-5xl xl:text-7xl 2xl:text-8xl 2xs:text-3xl">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-12 md:grid-cols-6 md:gap-16 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 2xl:gap-12 2xs:grid-cols-3 2xs:gap-16 2xs:justify-center 2xs:place-items-center 2xs:w-fit ">
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="TypeScript"
            >
              <Image src={typescript} alt="typescript" width={64} height={64} />
            </Tooltip>

            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="TailwindCSS"
            >
              <Image src={tailwindcss} alt="tailwindcss" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Next.js"
            >
              <Image src={nextjs} alt="nextjs" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Supabase"
            >
              <Image src={supabase} alt="supabase" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="PostgreSQL"
            >
              <Image src={postgresql} alt="postgresql" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="HTML"
            >
              <Image src={html5} alt="html5" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="CSS"
            >
              <Image src={css3} alt="css3" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Vercel"
            >
              <Image src={vercel} alt="vercel" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Figma"
            >
              <Image src={figma} alt="figma" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
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
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Git"
            >
              <Image src={git} alt="git" width={64} height={64} />
            </Tooltip>
          </div>
        </motion.div>
      </div>

      {/* What I am Learning Section */}

      <div className="px-[7.5rem] py-20 flex flex-col gap-8 md:px-[3.75rem] xl:px-[5rem] 2xl:px-[7.5rem] 2xs:px-6 2xs:py-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-8xl text-white/35 md:text-5xl xl:text-7xl 2xl:text-8xl 2xs:text-3xl">
              What I am currently learning
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-12 md:grid-cols-6 md:gap-16 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12 2xl:gap-12 2xs:grid-cols-3 2xs:gap-16 2xs:justify-center 2xs:place-items-center 2xs:w-fit  ">
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Electron"
            >
              <Image src={electron} alt="electronjs" width={64} height={64} />
            </Tooltip>
            <Tooltip
              color="default"
              className="bg-[#222] p-3 font-medium text-sm border border-white/15 md:text-sm md:p-2"
              placement={"bottom"}
              content="Flutter"
            >
              <Image src={flutter} alt="flutter" width={64} height={64} />
            </Tooltip>
          </div>
        </motion.div>
      </div>
      {/* CaseStudies Section */}
      <div
        id="casestudies"
        className="px-[7.5rem] py-20 flex flex-col gap-8 md:px-[3.75rem] xl:px-[5rem] 2xl:px-[7.5rem] 2xs:px-6 2xs:py-10 "
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-8xl text-white/35 md:text-5xl xl:text-7xl 2xl:text-8xl 2xs:text-3xl">
              Case Studies
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-12 md:grid-cols-1 md:gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-2 xl:gap-12 2xl:gap-12 2xl:grid-cols-3 2xs:grid-cols-1 2xs:gap-16">
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
        </motion.div>
      </div>
    </motion.div>
  );
}

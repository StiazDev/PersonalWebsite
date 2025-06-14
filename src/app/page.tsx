import Image from "next/image";
import PortfolioImg from "@/../public/Landing Page/portfolioImg.jpg";
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

export default function Home() {
  return (
    <div>
      {/* About Me */}
      <div id="about" className="px-[7.5rem] py-20 flex gap-16">
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
      </div>
      {/* Skills Section */}
      <div id="skills" className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Skills</h2>
          <p className="font-normal text-base text-white/85">
            These are the languages and tools I have learned & used to get the job done. I am
            proficient in all of these.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <Image src={typescript} alt="typescript" width={64} height={64} />
          <Image src={tailwindcss} alt="tailwindcss" width={64} height={64} />
          <Image src={nextjs} alt="nextjs" width={64} height={64} />
          <Image src={supabase} alt="supabase" width={64} height={64} />
          <Image src={postgresql} alt="postgresql" width={64} height={64} />
          <Image src={html5} alt="html5" width={64} height={64} />
          <Image src={css3} alt="css3" width={64} height={64} />
          <Image src={vercel} alt="vercel" width={64} height={64} />
          <Image src={figma} alt="figma" width={64} height={64} />
          <Image
            src={github}
            alt="github"
            width={64}
            height={64}
            className="bg-white rounded-full"
          />
          <Image src={git} alt="git" width={64} height={64} />
        </div>
      </div>
      {/* What I am Learning Section */}
      <div className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">What I am currently learning</h2>
          <p className="font-normal text-base text-white/85">
            And These are the languages and tools that I am currently learning (Some for fun, some
            to make future products.)
          </p>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <Image src={electron} alt="electronjs" width={64} height={64} />
          <Image src={flutter} alt="flutter" width={64} height={64} />
        </div>
      </div>
      {/* CaseStudies Section */}
      <div id="casestudies" className="px-[7.5rem] py-20 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-2xl">Case Studies</h2>
          <p className="font-normal text-base text-white/85">
            These are the products I have worked on so far. I have described what I have put to the
            table in each on them in breif details. ( If you are looking to hire this is what you
            were looking for :) ).
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <CaseStudyItemCard
            CaseStudyImg={Colliseam}
            CompanyName="Colliseam (Formerly Nexus)"
            Description="A Platform which connects young designers & developers to work on projects."
            Role="Front-End Developer, Later Lead Marketer."
            CaseStudyLink="/colliseam-case-study"
          />
          <CaseStudyItemCard
            CaseStudyImg={ServrBill}
            CompanyName="ServrBill"
            Description="Restaurant Billing Software."
            Role="Full-Stack, Designer, Sales, Founder."
            CaseStudyLink="/servrbill-case-study"
          />
          <CaseStudyItemCard
            CaseStudyImg={BreakTheSlack}
            CompanyName="BreakTheSlack"
            Description="Task Accountability Software & Community for Aspiring Entrepreneurs."
            Role="Back-End, Designer, Founder, Marketing."
            CaseStudyLink="/breaktheslack-case-study"
          />
        </div>
      </div>
    </div>
  );
}

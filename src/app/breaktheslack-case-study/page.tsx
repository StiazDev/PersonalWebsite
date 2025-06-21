"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import UseAnimations from "react-useanimations";
import arrowUp from "react-useanimations/lib/arrowUp";
// Images
import BreakTheSlackPic from "@/../public/Landing Page/CaseStudy Images/BreakTheSlack Landing Page.png";
import CaseStudyImg1 from "@/../public/CaseStudies/BreakTheSlack/BreakTheSlack CaseStudy Picture.png";
import CaseStudyImg2 from "@/../public/CaseStudies/BreakTheSlack/Streaks History - Mobile.png";
import CaseStudyImg3 from "@/../public/CaseStudies/BreakTheSlack/Streak History Today Flow Chart.png";
import CaseStudyImg4 from "@/../public/CaseStudies/BreakTheSlack/Streak History Yesterday Flow Chart.png";
import CaseStudyImg5 from "@/../public/CaseStudies/BreakTheSlack/Milestones Page.png";

function page() {
  return (
    <motion.div
      initial={{ x: "-100vh", opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } }}
    >
      {/* Intro */}
      <div className="flex flex-col px-[7.5rem] py-20 justify-start place-items-center gap-12 md:px-[3.75rem] md:gap-8 xl:px-[5rem] 2xl:px-[7.5rem] 2xl:gap-12">
        <Image
          src={BreakTheSlackPic}
          alt="Header Photo"
          className="w-3/4 h-fit aspect-video rounded-lg md:w-full xl:w-3/4"
        />
        <div className="w-full flex gap-12 md:flex-col md:gap-16 lg:flex-row lg:gap-8 2xl:gap-12">
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8">
            <div className="flex flex-col gap-2 md:gap-1 xl:gap-2">
              <h2 className="font-bold text-base">BreakTheSlack</h2>
              <p className="font-normal text-base text-white/75">March 2025 - May 2025</p>
            </div>

            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Role:</span> Founder, Back-End, Designer,
              Marketing
            </p>
            <Link
              href={"https://breaktheslack.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className={
                  "bg-white px-8 py-3 rounded-full font-semibold text-base text-black flex gap-2 place-items-center w-fit cursor-pointer hover:bg-[#FFDE5B] hover:text-black duration-200 z-30 md:text-sm md:px-6 md:py-3 xl:px-8 xl:py-3 xl:text-base"
                }
              >
                Visit BreakTheSlack{" "}
                <UseAnimations animation={arrowUp} size={24} className="rotate-45" speed={1.15} />
              </motion.button>
            </Link>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8">
            <p className="font-normal text-base text-white/75">
              BreakTheSlack is a accountability software for aspiring entrepreneurs. It helps them
              make progress every day by helping them have clarity and finish their most important 3
              goals every day.
            </p>
            <p className="font-normal text-base text-white/75">
              <span className="font-bold text-white/90">Company Size:</span> 3 people.
            </p>
          </div>
          <div className="w-1/3 flex flex-col gap-8 md:w-full md:gap-4 lg:w-1/3 lg:gap-6 2xl:gap-8">
            <p className="font-normal text-base text-white/75">
              Validated the idea of BreakTheSlack and wrote the entire software’s back-end. From
              Auth to systems like streaks & streak history. Designed the Landing page and entire UI
              and did most of the front-end work. Launched the software to 12+ beta users and
              iterated on the product with the user feedback.
            </p>
            <h3 className="font-semibold text-base">My Collaborators:</h3>
            <ul className="font-medium text-base text-white/85 list-disc">
              <li>Serwin (Front-End Intern).</li>
              <li>Rohith (Marketing Intern).</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Dashboard and Features Explaination */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-20 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-10 md:flex-col-reverse lg:flex-row xl:px-[5rem] xl:gap-14 2xl:px-[7.5rem] 2xl:gap-20 ">
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2  ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Dashboard:</h2>
              <p className="font-normal text-base text-white/75">
                BreakTheSlack is the tool which opened gates of backend programming for me.
                Initially I started with no design no UI. pure html input forms and data im
                paragraph tags. First I added authentication with Supabase Auth (specifically email
                & password Auth), then I made a simple to-do app with Supabase as my backend.
                <br />
                <br />
                I later learned about RLS and implemented it so that a user can only see his own
                rows of data, which improved the security of the application. I added task deletion
                functionality and handled new task form on a separate page.
                <br />
                <br />
                Then I thought that it was a pain going to a different page just to make a task
                every time. So I learned how to implement Supabase Realtime, now I handled tasked
                creation on the dashboard with the data updating in real-time.
                <br />
                <br />
                I separated To-dos from Primary Tasks by making a column called “is_primary” in the
                tasks table, which helped me keep all of the tasks in a single table but allowed me
                to differentiate between the two.
                <br />
                <br />
                <span className="font-semibold text-white/90"></span>Daily Motivation: This was a
                system which would show the user a different quote to the user every day. Meaning
                that the quote will change only the next day. I handled the problem by first
                creating a daily quotes table adding quotes from .csv files with authors. Next I
                wrote a function which would check if the quote was changed today, if not it would
                use Math.Random to get a random number which was not bigger than the rows on the
                daily quotes table. And update user’s profile on the dbs with that number. Now on
                that day that exact quote will be shown until the date changes.
              </p>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2 ">
            <Image
              src={CaseStudyImg1}
              alt="BreakTheSlack Dashboard"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Streak and Steak History Explaination */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-20 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-10 md:flex-col-reverse lg:flex-row xl:px-[5rem] xl:gap-14 2xl:px-[7.5rem] 2xl:gap-20 ">
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2  ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Streaks System:</h2>
              <p className="font-normal text-base text-white/75">
                Now it was time to add the streaks system, this was more complex than I expected. I
                not only had to make a function which will increase streak, but also handle edge
                cases. I started by making a flow in Miro Board. Underlining how the system will
                work with a flow diagram. Initially it worked but it had a lot of issues.
                <br />
                <br />I rewrote the whole system 4 times until I was satisfied, but it wasn’t yet
                complete. Soon enough I had to a Streak History system, and my original Streak
                System well it wasn’t built to take care of that. And here I was making changes to
                the streak system once again to make the streak history work. My implementation of
                streak history was rather incomplete, because I never implemented it.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Phase 2 Streak History:</h2>
              <p className="font-normal text-base text-white/75">
                I built a perfectly working streaks system but, it was not enough. In the marketing
                vehicle I wrote for BreakTheSlack the streak history was a import part of this
                software but, I left that for later (What you leave for later eventually becomes a
                problem).
                <br />
                <br />
                <span className="font-bold text-white/90">
                  Step 1 (Redesign the flow of the streaks system for it to take care of the streak
                  history):
                </span>
                <br /> I went back to the drawing board (My Miro Board Flow Chart Diagram to be
                exact :) ), now I had to figure out firstly how do I take care of streak history, I
                started small: make a streak_history table in the dbs and add the necessary columns
                required, figure out the elements needed in the flow to just add the row to the
                streak_history table with the accurate data.
              </p>
            </div>
            <Image
              src={CaseStudyImg3}
              alt="Streak History Flow Chart 1"
              className=" w-full h-fit rounded-lg"
            />
            <p className="font-normal text-base text-white/75">
              This flow made it really clear how to implement the feature, I just had to translate
              this into javascript and PGSQL Functions. but this is not the end, now I had to figure
              out what to do if the user didn’t increase his / her streak yesterday. Well it was not
              too hard as well the flow below explains what approach I came up with for that case as
              well:
            </p>
            <Image
              src={CaseStudyImg4}
              alt="Streak History Flow Chart 2"
              className=" w-full h-fit rounded-lg"
            />
            <p className="font-normal text-base text-white/75">
              Because the streak counter can only be increased if the yesterday or before the flow
              chart is made this way. So if the streak was changed before yesterday then a new row
              on Streak History Table will be made.
              <br />
              <br />
              Yes the system is not as robust and it is missing many edge cases but that’s because I
              to take care of a product which users would pay for plus my exams were on the horizon.
              Who knows maybe some day I will make it better (This project is not yet finished, it
              might never be finished. I’ll always add something to improve it.)
            </p>
          </div>
          <div className=" w-1/2 flex flex-col gap-12 place-items-center md:w-full lg:w-1/2  ">
            <Image
              src={CaseStudyImg2}
              alt="BreakTheSlack Sreak History Page"
              className="w-1/2 rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* MileStones Explaination */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-20 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-10 md:flex-col-reverse lg:flex-row xl:px-[5rem] xl:gap-14 2xl:px-[7.5rem] 2xl:gap-20 ">
          <div className=" w-1/2 flex flex-col gap-12 md:w-full lg:w-1/2  ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Milestones:</h2>
              <p className="font-normal text-base text-white/75">
                The Milestones system was also a important part of the software, systems like the
                Milestones and Streaks were not there just for show, before writing a single line of
                code I did a lot of research talking to my Smallest Viable Audience, interviewing
                them, finding their problems, and finally I had to make this addictive. They had to
                come back to app every single day so they can have clarity and do what’s important.
                <br />
                <br />I researched on the human brain’s dopamine and reward system. And small things
                like the streaks and milestones were what I came up with in accordance to how the
                human brain works to make it addictive. Making the user return every day.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Process:</h2>
              <p className="font-normal text-base text-white/75">
                Firstly I made a Table on the dbs called Milestones and it’s columns containing the
                title, requirement and milestone image. I tracked the completion of the milestones
                in the code itself. So I’d fetch all milestones and replace the image with a locked
                icon if the milestone wasn’t completed, same with the title. Now in code I would
                check if the longest_streak was {">="} streak requirement and it would unlock the
                content of the milestones. I did the same with primary tasks.
                <br />
                <br />
                <span className="font-bold text-white/90">Problems I faces:</span>
                <br />
                My initial approach to solving this was working but it was not the best, I created 3
                water falls in order to solve a simple problem, which led to a 5 second delay before
                milestones could be unlocked. I reached out to people with more experience in a
                developer community I hang out with. And the guy explained to me what water falls
                are and gave me advice on how to avoid them.
                <br />
                <br />
                <span className="font-bold text-white/90">Improvement:</span>
                <br />
                After removing the water falls the milestones performance went from 5 second to
                approx 0.3 seconds. Which to the user felt like instant.
              </p>
            </div>
          </div>
          <div className=" w-1/2 flex flex-col gap-12 place-items-center md:w-full lg:w-1/2  ">
            <Image
              src={CaseStudyImg5}
              alt="BreakTheSlack Milestones Page"
              className="w-full h-fit rounded-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-12 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-6 xl:px-[5rem] xl:gap-8 2xl:px-[7.5rem] 2xl:gap-12 ">
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Summary:</h2>
              <p className="font-normal text-base text-white/75">
                I started BreakTheSlack initially as a fun project for my self so I can learn, but
                over time I thought of it as an opportunity to become something bigger than a
                personal project. I took care of everything, Design, Front-End, Back-End, Marketing,
                Research, etc. I remember the days I worked on this for 12 hours a day, it was my
                first ever software in which I did not just the front-end but also the design and
                back-end (And backend was something I have never touched in my life). So I was slow
                to make progress, but what I learned from this was something no YouTube tutorial can
                ever teach.
                <br />
                <br />
                Saying I am going to build this and actually building it are two different things,
                and for someone with my skillset it was too big of a project to handle alone. But
                what do you know, people with my mindset are quite stubborn, we don’t back down on
                our words. I learned what was necessary to bring it to life, I got stuck on problems
                for a week only to realize that it was that easy to do. But that’s where the real
                learning happens.
                <br />
                <br />
                Soon I brought a front-end Intern to my team, I wanted to take care of back-end
                (Front-End was too easy for me, no challenge is no fun). That’s where I learned how
                to transfer my knowledge to others. Sitting in Voice chats teaching where the intern
                gets stuck. And then I brought a Marketing Intern because I couldn’t do it all alone
                if I wanted to do it fast, (I could do it alone with slow speed, or I could make my
                progress slower for some time to teach others and increase my speed by a lot).
                <br />
                <br />
                It was my first time not only implementing a UI but also designing. I learned that
                making the design look good and it being good are 2 different things.
                <br />
                <br />
                Creating something from start to finish, that was a fun process :).
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Learned: */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="flex gap-12 px-[7.5rem] py-20 md:px-[3.75rem] md:gap-6 xl:px-[5rem] xl:gap-8 2xl:px-[7.5rem] 2xl:gap-12 ">
          <div className="flex flex-col gap-12 ">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Skills Learned:</h2>
              <ul className="font-medium text-base text-white/85 list-disc">
                <li>Designing UI / UX of a software.</li>
                <li>Supabase.</li>
                <li>PostgreSQL.</li>
                <li>Writing Algorithms (Functions that did a specific task very well).</li>
                <li>Server-Side Tasks.</li>
                <li>Authentication.</li>
                <li>Password-less Sign in With Google.</li>
                <li>Row Level Security.</li>
                <li>Responsive UI.</li>
                <li>Mobile UI design and implementation.</li>
                <li>Leadership.</li>
                <li>Launching a Product to users.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default page;

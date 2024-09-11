"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { CardHeader } from "@/components/CardHeader";

import CatIcon from "@/assets/images/catBox.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map-1.png";
import avatarHead from "@/assets/images/avatar-2-2-head.png";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Coding",
    emoji: "🧑‍💻",
    left: "5%",
    top: "35%",
  },
  {
    title: "Martial Arts",
    emoji: "🥋",
    left: "35%",
    top: "35%",
  },
  {
    title: "Documentaries",
    emoji: "📽️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "33%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const contraintRef = useRef(null);
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          headline="About Me"
          title="A Peek into my world"
          description="A glimpse into what I'm about, what I create, and what drives me forward."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] col-span-2">
              <CardHeader
                title="Fighting Spirit"
                description="See what inspires me and keeps me ready for new challenges."
              />
              <div className="-my-9 md:-mt-[8px] lg:-mt-10">
                <Image src={CatIcon} alt="Cat Fighting...!!" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 col-span-3">
              <CardHeader
                title="My Toolbox"
                description="Explore the tech and tools I use to build digital experiences."
                className="px-6 pt-6"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>

          <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond coding."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={contraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full  mt-3 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={avatarHead}
                  alt="Avatar Head"
                  className="size-16 translate-y-1 -translate-x-1"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

import jobFlow from "@/assets/images/jobflow.png";
import financio from "@/assets/images/financio.png";
import babble from "@/assets/images/babble.png";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GithubIcon from "@/assets/icons/github-mark-white.png";
import grainImage from "@/assets/images/grain.jpg";

import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Financio",
    title: "Personal Finance Tracker",
    results: [
      { title: "Developed responsive UI with Shadcn components in Next.js" },
      { title: "Integrated data management with React-Query" },
      { title: "Streamlined API performance using Hono and TypeScript" },
    ],
    link: "https://financio-lemon.vercel.app/",
    github: "https://github.com/farhan-alam18/financio",
    image: financio,
  },
  {
    company: "Babble",
    title: "Social Media Platform",
    results: [
      { title: "Leveraged MongoDB Atlas for DB management in MERN stack" },
      { title: "Implemented REST API using Node.js and Express" },
      { title: "Optimized data fetching with React-Query" },
    ],
    link: "https://babble-aryv.onrender.com/",
    github: "https://github.com/farhan-alam18/babble",
    image: babble,
  },
  {
    company: "JobFlow",
    title: "Job Platform for Developers",
    results: [
      { title: "Implemented authentication with Clerk using Next.js" },
      { title: "Optimized database queries using Prisma and TypeScript" },
      { title: "Built scalable UI components with Shadcn" },
    ],
    link: "https://job-flow-nine.vercel.app/",
    github: "https://github.com/farhan-alam18/jobflow",
    image: jobFlow,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Explore how I build practical, user-focused web apps with modern
          frameworks.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0  overflow-hidden after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm md:text-xl text-transparent bg-clip-text">
                    <span>{project.company}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-3 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span>&bull;</span>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <Link href={project.link}>
                      <button className="bg-white/90 text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 transition-all hover:bg-white/80 md:p-5">
                        <span>Visit Live Site</span>
                        <ArrowUpRightIcon className="size-5" />
                      </button>
                    </Link>
                    <Link href={project.github}>
                      <button className="bg-green-700 text-white h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 transition-all hover:bg-green-700/80 md:p-5">
                        <span>View Github</span>
                        <Image src={GithubIcon} alt="" className="size-7" />
                      </button>
                    </Link>
                  </div>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:ml-[320px] lg:w-auto lg:max-w-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

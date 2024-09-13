import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-1 pt-12 relative z-10"> 
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-400 to-sky-300 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 z-[-10]" 
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-16 items-center relative z-10">
            <div className="md:text-start">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s team up for success
              </h2>
              <p className="text-sm md:text-base mt-2">
                Looking to tackle your next big project? Let&apos;s connect and
                explore how I can contribute to reaching your goals.
              </p>
            </div>
            <button className="text-white bg-gray-900 px-6 h-12 rounded-xl mt-8">
              <Link href="https://www.linkedin.com/in/farhan-alam-497b66323/" className="inline-flex items-center gap-2 w-max">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-5" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

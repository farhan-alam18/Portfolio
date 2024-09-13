import Link from "next/link";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerItems = [
  {
    title: "Github",
    link: "https://github.com/farhan-alam18",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/farhan-alam-497b66323/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip"> {/* Set z-0 to ensure it's behind ContactSection */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-[-10]"></div> {/* Set lower z-index */}
      <div className="container">
        <div className="mt-10 border-t border-white/15 py-10 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024 All rights reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerItems.map((item) => (
              <Link
                href={item.link}
                key={item.link}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{item.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export const Header = () => {
  const navItems = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((nav, index) => (
          <a
            key={index}
            href="#"
            className="px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-300"
          >
            {nav}
          </a>
        ))}
      </nav>
    </div>
  );
};

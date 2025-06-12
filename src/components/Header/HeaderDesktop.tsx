import Logo from "./Logo";

export function HeaderDesktop() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-none shadow-none border-none font-sans">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        <Logo />
        <div className="flex items-center text-base font-medium">
          <a
            href="/projects"
            className="text-gray-700 hover:text-emerald-500 transition px-4"
          >
            Projects
          </a>
          <span className="h-5 w-px bg-gray-300 mx-2" />
          <a
            href="/certificates"
            className="text-gray-700 hover:text-emerald-500 transition px-4"
          >
            Certificates
          </a>

          <span className="h-5 w-px bg-gray-300 mx-2" />
          <a
            href="/skills"
            className="text-gray-700 hover:text-emerald-500 transition px-4"
          >
            Skills
          </a>
          <span className="h-5 w-px bg-gray-300 mx-2" />
          <a
            href="/Activities"
            className="text-gray-700 hover:text-emerald-500 transition px-4"
          >
            Activities
          </a>
        </div>
      </nav>
    </header>
  );
}

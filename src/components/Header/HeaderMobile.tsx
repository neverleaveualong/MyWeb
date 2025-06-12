import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

const menu = [
  { name: "Main", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Certificates", href: "/certificates" },
  { name: "Skills", href: "/skills" },
  { name: "Activities", href: "/Activities" },
];

export function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setFadeOut(false);
  };

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setOpen(false);
      setFadeOut(false);
    }, 340);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-none border-none font-['Pretendard']">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Logo />
        <div className="hidden md:flex items-center text-base font-medium">
          {menu.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-emerald-500 transition px-4"
            >
              {item.name}
              {i < menu.length - 1 && (
                <span className="h-5 w-px bg-gray-300 mx-2 inline-block align-middle" />
              )}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/70 hover:bg-emerald-50 transition"
          onClick={handleOpen}
          aria-label="메뉴 열기"
        >
          <FaBars className="text-2xl text-gray-700" />
        </button>
      </nav>
      {/* 모바일 메뉴 오버레이 */}
      {open && (
        <div
          className={`fixed inset-0 z-50 bg-white flex flex-col items-center pt-24 animate-fadein ${
            fadeOut ? "animate-fadeout" : ""
          }`}
          style={{ animationFillMode: "forwards", minHeight: "100vh" }}
        >
          {/* 닫기 버튼 */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-white hover:bg-emerald-50 transition"
            onClick={handleClose}
            aria-label="메뉴 닫기"
          >
            <FaTimes className="text-2xl text-gray-700" />
          </button>
          {/* 로고/프로필 */}
          <div className="mb-10 mt-2">
            <Logo />
          </div>
          {/* 메뉴 리스트 */}
          <ul className="flex flex-col gap-7 w-full items-center text-2xl font-extrabold tracking-wide font-['Pretendard']">
            {menu.map((item) => (
              <li key={item.name} className="w-full">
                <a
                  href={item.href}
                  className="block w-full text-gray-800 hover:text-emerald-500 transition text-center py-2"
                  onClick={handleClose}
                  style={{
                    minHeight: "3.5rem",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 모바일 전용 fade-in/out 애니메이션 */}
      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(-16px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeout {
          from { opacity: 1; transform: translateY(0);}
          to { opacity: 0; transform: translateY(-16px);}
        }
        .animate-fadein { animation: fadein 0.34s cubic-bezier(.4,0,.2,1) forwards; }
        .animate-fadeout { animation: fadeout 0.34s cubic-bezier(.4,0,.2,1) forwards; }
      `}</style>
    </header>
  );
}

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-gray-100 py-10 mt-24 font-['Pretendard']">
      <div className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 text-base">
        {/* 왼쪽: 이메일 */}
        <div className="flex flex-col items-center md:items-start">
          <span className="uppercase tracking-widest text-[1.05rem] font-extrabold text-emerald-600 mb-1 font-['Pretendard']">
            EMAIL
          </span>
          <a
            href="mailto:wmr06244@gmail.com"
            className="text-gray-900 font-bold text-base not-italic hover:underline transition font-['Pretendard']"
            aria-label="Email"
          >
            wmr06244@gmail.com
          </a>
        </div>
        {/* 중앙: GitHub */}
        <div className="flex flex-col items-center justify-center gap-2">
          <span className="uppercase tracking-widest text-[1.05rem] font-extrabold text-emerald-600 mb-1 font-['Pretendard']">
            GITHUB
          </span>
          <a
            href="https://github.com/neverleaveualong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 font-semibold hover:text-emerald-600 transition font-['Pretendard']"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
            neverleaveualong
          </a>
        </div>
        {/* 우측: 저작권 */}
        <div className="flex flex-col items-center md:items-end">
          <span
            className="font-semibold tracking-wide uppercase text-emerald-600 text-[1.05rem] font-['Pretendard']"
            style={{
              textShadow: "0 2px 8px rgba(16,185,129,0.07)",
              letterSpacing: "0.08em",
            }}
          >
            © {new Date().getFullYear()} WOOHYUN SIM
          </span>
          <span className="text-gray-400 font-medium text-sm font-['Pretendard'] mt-1">
            Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}

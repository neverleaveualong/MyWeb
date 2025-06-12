import { useState } from "react";

import pf1 from "../../assets/image/pf1.png";
import pf2 from "../../assets/image/pf2.png";
import pf3 from "../../assets/image/pf3.png";
import pf4 from "../../assets/image/pf4.png";
import pf5 from "../../assets/image/pf5.png";

// 여러 프로젝트 예시 (각 프로젝트마다 images 배열 포함)
const projects = [
  {
    name: "공유 일정 캘린더 플랫폼",
    period: "2025.05 ~ 2025.06",
    description:
      "개인 일정과 공모전·자격증·시험 일정을 통합 관리하고, 친구 기능과 북마크 기능을 통해 협업 및 관심 일정을 효율적으로 공유·저장할 수 있는 웹 기반 캘린더 서비스입니다.",
    role: "프론트엔드 개발 및 UI/UX 구현",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Router",
      "Axios",
      "Framer Motion",
    ],
    images: [pf1, pf2, pf3, pf4, pf5],
    github: "https://github.com/yourname/shared-calendar-platform-frontend",
    link: "https://shared-calendar-frontend.example.com",
    outcome: [
      "컴포넌트 기반 설계로 유지보수성과 확장성 강화",
      "Tailwind CSS로 일관된 디자인 시스템 구현",
      "JWT 인증과 연동한 안전한 API 통신 환경 구축",
    ],
    process: [
      "Figma로 화면 와이어프레임 및 프로토타입 제작",
      "Zustand를 통한 전역 상태 관리 로직 구현",
      "Framer Motion으로 사용자 인터랙션 애니메이션 구현",
    ],
  },
  {
    name: "작업 중",
    period: "작업 중",
    description: "작업 중",
    role: "작업 중",
    tech: [],
    images: [],
    github: "",
    link: "",
    outcome: [],
    process: [],
  },
];

export default function ProjectSection() {
  const [projectIdx, setProjectIdx] = useState(0);
  const [imgIdx, setImgIdx] = useState(0);
  const project = projects[projectIdx];
  const images = project.images;

  // 이미지 이동
  const prevImg = () => setImgIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImg = () => setImgIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-4 font-['Pretendard']">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 tracking-tight text-center">
        PROJECTS
      </h2>
      <div className="bg-white/95 rounded-3xl border border-gray-100 flex flex-col md:flex-row overflow-hidden">
        {/* 이미지 캐러셀 */}
        <div className="md:w-[56%] w-full flex-shrink-0 flex flex-col items-center justify-center bg-gray-50 relative">
          <div className="relative w-full h-[520px] flex items-center justify-center">
            {images.length > 0 && (
              <>
                <img
                  src={images[imgIdx]}
                  alt={`${project.name} screenshot ${imgIdx + 1}`}
                  className="w-full h-[500px] object-cover object-center rounded-3xl md:rounded-none transition-all duration-300"
                  style={{ boxShadow: "0 2px 16px 0 rgba(0,0,0,0.04)" }}
                />
                {/* 이미지 좌우 이동 버튼 */}
                <button
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-emerald-100 text-gray-700 rounded-full p-2 shadow transition"
                  aria-label="이전 이미지"
                >
                  <svg
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M16 6l-6 6 6 6" />
                  </svg>
                </button>
                <button
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-emerald-100 text-gray-700 rounded-full p-2 shadow transition"
                  aria-label="다음 이미지"
                >
                  <svg
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M10 6l6 6-6 6" />
                  </svg>
                </button>
              </>
            )}
          </div>
          {/* 이미지 인디케이터 */}
          <div className="flex gap-1 mt-3">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === imgIdx ? "bg-emerald-500" : "bg-gray-200"
                } transition`}
              />
            ))}
          </div>
        </div>
        {/* 내용 */}
        <div
          className="flex flex-col gap-7 p-12 md:w-[44%] w-full min-h-[520px] justify-center"
          style={{ minWidth: "340px" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
            <span className="text-xs text-gray-400 font-semibold">
              {project.period}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
          <div>
            <p
              className="text-gray-700 mb-4 leading-relaxed md:text-base text-sm"
              style={{ maxWidth: "100%" }}
            >
              {project.description}
            </p>
            <div className="mt-2">
              <span className="block text-sm font-bold text-gray-800 mb-1">
                주요 역할
              </span>
              <span className="text-sm text-gray-600">{project.role}</span>
            </div>
          </div>
          <div>
            <span className="block text-sm font-bold text-gray-800 mb-1">
              프로젝트 과정
            </span>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {project.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block text-sm font-bold text-emerald-600 mb-1">
              성과 및 결과
            </span>
            <ul className="list-disc list-inside text-sm text-emerald-700 space-y-1">
              {project.outcome.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900"
                aria-label="GitHub"
              >
                <svg width="22" height="22" fill="currentColor">
                  <path d="M10 .3a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 5.8c.85.004 1.71.11 2.51.32 1.9-1.29 2.73-1.02 2.73-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0010 .3" />
                </svg>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 underline font-medium text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      {/* 프로젝트 인디케이터 */}
      <div className="flex gap-2 justify-center mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setProjectIdx(i);
              setImgIdx(0);
            }}
            className={`w-3 h-3 rounded-full ${
              i === projectIdx ? "bg-emerald-600" : "bg-gray-200"
            } transition`}
            aria-label={`프로젝트 ${i + 1}번으로 이동`}
          />
        ))}
      </div>
    </section>
  );
}

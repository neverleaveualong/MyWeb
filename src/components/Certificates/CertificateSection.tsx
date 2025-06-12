interface Certificate {
  name: string;
  org: string;
  desc: string;
}
interface CertificateSectionProps {
  title: string;
  color: string; // Tailwind 색상 예: "emerald-600"
  certificates: Certificate[];
}

export default function CertificateSection({
  title,
  color,
  certificates,
}: CertificateSectionProps) {
  // 색상 동적 적용을 위해 Tailwind 대신 style 속성 활용
  const sectionBarStyle =
    title === "IT & Data"
      ? { background: "linear-gradient(90deg, #34d399 0%, #a7f3d0 100%)" } // emerald 계열
      : { background: "linear-gradient(90deg, #fdba74 0%, #fef3c7 100%)" }; // orange 계열

  // 짧고 트렌디한 멘트
  const sectionMent =
    title === "IT & Data" ? "취득한 IT 자격증" : "취득한 기타 자격증";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      {/* 좌측: 섹션명 및 멘트 */}
      <div className="md:col-span-1 flex flex-col items-start pt-2">
        <h2
          className={`text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-3 font-['Pretendard'] drop-shadow-sm
            ${
              color === "emerald-600" ? "text-emerald-600" : "text-orange-500"
            }`}
        >
          {title}
        </h2>
        <div
          className="w-24 h-2 rounded-full mb-2 opacity-80"
          style={sectionBarStyle}
        />
        <span className="text-sm text-gray-500 font-['Pretendard'] mt-1 mb-2">
          {sectionMent}
        </span>
      </div>
      {/* 우측: 자격증 리스트 */}
      <div className="md:col-span-2 flex flex-col gap-6">
        {certificates.map((cert, idx) => (
          <div
            key={cert.name}
            className={`relative flex flex-col md:flex-row md:items-start gap-4 px-6 py-5 bg-white/80 rounded-xl shadow-sm
              ${
                idx !== certificates.length - 1
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-6 after:right-6 after:h-px after:bg-gradient-to-r after:from-gray-100 after:via-gray-200 after:to-gray-100"
                  : ""
              }
            `}
          >
            <span className="w-56 min-w-[140px] text-gray-900 text-lg font-semibold font-['Pretendard'] tracking-tight">
              {cert.name}
            </span>
            <div>
              <div className="font-bold text-gray-700 text-base md:text-lg mb-1 font-['Pretendard'] tracking-wide">
                {cert.org}
              </div>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-['Pretendard']">
                {cert.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

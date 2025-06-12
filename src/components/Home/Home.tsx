import profileImg from "../../assets/image/profile.jpg";

export default function Home() {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white via-slate-50 to-emerald-50 font-sans pb-0">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-16 max-w-6xl w-full px-12 py-20 rounded-3xl bg-white/90">
        {/* 좌측: 동그란 프로필 이미지 */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src={profileImg}
            alt="Profile"
            className="w-[258px] h-72 object-cover rounded-full"
            style={{ objectPosition: "center 48%" }}
          />
        </div>
        {/* 우측: 트렌디한 한글 이력서 멘트 */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1 font-['Pretendard']">
            심우현
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-emerald-600 tracking-wider mb-2 font-['Pretendard']">
            SW Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed font-['Pretendard']">
            <span className="font-semibold text-emerald-600">
              사용자 중심의 경험
            </span>
            과{" "}
            <span className="font-semibold text-emerald-600">
              미니멀한 디자인
            </span>
            을 추구하는 프론트엔드 개발자입니다.
            <br />
            <br />
            React, TypeScript, Tailwind CSS를 기반으로{" "}
            <span className="font-semibold text-emerald-600">
              트렌디하고 직관적인 UI
            </span>
            를 구현하며,{" "}
            <span className="font-semibold text-emerald-600">깔끔한 코드</span>
            와{" "}
            <span className="font-semibold text-emerald-600">
              섬세한 디테일
            </span>
            을 통해 완성도 높은 웹 서비스를 만듭니다. 새로운 기술과 디자인
            트렌드에 항상 열려 있으며,{" "}
            <span className="font-semibold text-emerald-600">문제 해결</span>과{" "}
            <span className="font-semibold text-emerald-600">
              지속적인 성장
            </span>
            을 즐깁니다. 협업과 커뮤니케이션을 중요하게 생각하며, 더 나은 디지털
            경험을 위해 끊임없이 도전합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

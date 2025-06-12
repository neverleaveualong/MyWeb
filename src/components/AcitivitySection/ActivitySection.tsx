import { experience, activities } from "../../data/activities";

function TimelineBlock({
  title,
  color,
  barColor,
  items,
  sectionMent,
  dotColor,
}: {
  title: string;
  color: string;
  barColor: string;
  items: { title: string; period: string }[];
  sectionMent: string;
  dotColor: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-20">
      {/* 좌측: 섹션명 및 멘트 */}
      <div className="md:col-span-1 flex flex-col items-start pt-2 md:sticky md:top-32">
        <h2
          className={`text-2xl md:text-3xl font-extrabold uppercase tracking-tight font-['Pretendard'] ${color}`}
        >
          {title}
        </h2>
        <div
          className="h-2 w-20 rounded-full my-2"
          style={{ background: barColor }}
        />
        <span className="text-sm text-gray-500 font-['Pretendard'] mt-1">
          {sectionMent}
        </span>
      </div>
      {/* 우측: 타임라인 */}
      <div className="md:col-span-2 relative pl-6">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />
        <ul className="flex flex-col gap-10">
          {items.map((item, idx) => (
            <li key={item.title} className="relative flex items-start gap-6">
              {/* 타임라인 점 */}
              <span
                className="absolute left-[-1.05rem] top-2 w-4 h-4 rounded-full border-2 border-white"
                style={{ background: dotColor, boxShadow: "0 0 0 2px #e5e7eb" }}
              />
              {/* 내용 */}
              <div className="bg-white/90 rounded-xl px-6 py-5 w-full flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="text-lg font-semibold text-gray-900 font-['Pretendard'] tracking-tight">
                  {item.title}
                </span>
                <span className="text-sm text-gray-500 font-medium mt-2 md:mt-0 font-['Pretendard']">
                  {item.period}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ActivitySection() {
  return (
    <section className="w-full max-w-5xl mx-auto py-20 px-4 font-['Pretendard'] mt-20 md:mt-28">
      <TimelineBlock
        title="Experience"
        color="text-emerald-600"
        barColor="#a7f3d0"
        items={experience}
        sectionMent="주요 학업 및 경력"
        dotColor="#34d399"
      />
      <TimelineBlock
        title="Extra Curricular Activities"
        color="text-orange-500"
        barColor="#fdba74"
        items={activities}
        sectionMent="교외활동 및 대외경험"
        dotColor="#fdba74"
      />
    </section>
  );
}

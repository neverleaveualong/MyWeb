import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiGooglecolab,
  SiDocker,
  SiGithub,
  SiGit,
  SiLinux,
  SiSlack,
  SiNotion,
  SiJira,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    color: "text-emerald-500",
    bar: "bg-emerald-100",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Python", icon: <SiPython className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "text-blue-500",
    bar: "bg-blue-100",
    skills: [
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
      { name: "Colab", icon: <SiGooglecolab className="text-yellow-500" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "text-orange-500",
    bar: "bg-orange-100",
    skills: [
      { name: "Docker", icon: <SiDocker className="text-sky-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-900" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-700" /> },
      { name: "Slack", icon: <SiSlack className="text-pink-400" /> },
      { name: "Notion", icon: <SiNotion className="text-black" /> },
      { name: "Jira", icon: <SiJira className="text-blue-700" /> },
    ],
  },
];

export default function SkillSection() {
  return (
    <section className="w-full max-w-3xl mx-auto py-20 px-4 font-['Pretendard']">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 tracking-tight text-center font-['Pretendard']">
        SKILLS
      </h2>
      <div className="flex flex-col gap-14">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="flex flex-col w-full bg-gradient-to-r from-white via-gray-50 to-white rounded-2xl border border-gray-100 px-10 py-10"
          >
            {/* 그룹 타이틀 */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className={`text-2xl md:text-3xl font-extrabold tracking-tight font-['Pretendard'] ${group.color}`}
              >
                {group.title}
              </span>
              <div className={`h-2 w-16 rounded-full ${group.bar}`} />
            </div>
            {/* 스킬 리스트 */}
            <ul className="flex flex-wrap gap-4">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-900 font-semibold text-base font-['Pretendard'] tracking-tight border border-gray-200 hover:bg-emerald-50 transition"
                  style={{ letterSpacing: "0.01em" }}
                >
                  <span className="text-xl">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

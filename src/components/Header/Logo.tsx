import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 cursor-pointer select-none">
      {/* 민트/에메랄드 원형 아이콘 */}
      <span className="inline-block w-8 h-8 rounded-full bg-emerald-400" />
      <div>
        <span className="block font-bold text-lg text-gray-900">
          Woohyun Sim
        </span>
        <span className="block text-sm text-gray-500 font-normal">
          Frontend Developer
        </span>
      </div>
    </Link>
  );
}

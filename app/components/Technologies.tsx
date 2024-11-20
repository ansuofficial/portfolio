import { SiTypescript, SiJavascript, SiReact, SiRemix } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

function Technologies({ theme, styles }: any) {
  return (
    <div
      className={`bg-gradient-to-b from-transparent to-white px-4 py-2 rounded-lg space-y-4 overflow-hidden relative backdrop-blur ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <h1 className={`text-gray-950 text-xl font-bold relative z-10`}>
        Skill sets
      </h1>
      <ul className="gap-y-4 md:space-y-2 grid grid-cols-2 md:grid-cols-1 relative z-10">
        <li className="flex items-center gap-x-2">
          <SiTypescript className="text-black w-6 h-6" />
          <span className="uppercase text-[#007acc] font-bold tracking-wide text-sm">
            typescript
          </span>
        </li>
        <li className=" flex items-center gap-x-2">
          <SiJavascript className="text-black w-6 h-6" />
          <span className="uppercase text-[#f0db4f] font-bold tracking-wide text-sm">
            javascript
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <SiReact className="text-black w-6 h-6" />
          <span className="uppercase text-[#61DBFB] font-bold tracking-wide text-sm">
            react
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <RiNextjsFill className="text-black w-6 h-6" />
          <span className="uppercase text-black font-bold tracking-wide text-sm">
            nextjs
          </span>
        </li>

        <li className="flex items-center gap-x-2">
          <SiRemix className="text-black w-6 h-6" />
          <span className="uppercase text-black font-bold tracking-wide text-sm">
            remixjs
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <RiTailwindCssFill className="text-black w-6 h-6" />
          <span className="uppercase text-[#38bdf8] font-bold tracking-wide text-sm">
            tailwind
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Technologies;

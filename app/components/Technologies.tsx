import { SiTypescript, SiJavascript, SiReact, SiRemix } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

function Technologies({ theme, styles }: any) {
  return (
    <div
      className={`dark:bg-hoverShadow bg-base px-4 py-2 rounded-lg space-y-4 ${styles}`}
    >
      <h1 className={`dark:text-white text-black text-xl`}>Skill sets</h1>
      <ul className="gap-y-4 md:space-y-2 grid grid-cols-2 md:grid-cols-1">
        <li className="flex items-center gap-x-2">
          <SiTypescript className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase text-[#007acc] font-bold tracking-wide text-sm">
            typescript
          </span>
        </li>
        <li className=" flex items-center gap-x-2">
          <SiJavascript className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase text-[#f0db4f] font-bold tracking-wide text-sm">
            javascript
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <SiReact className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase text-[#61DBFB] font-bold tracking-wide text-sm">
            react
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <RiNextjsFill className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase dark:text-white text-black font-bold tracking-wide text-sm">
            nextjs
          </span>
        </li>

        <li className="flex items-center gap-x-2">
          <SiRemix className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase dark:text-white text-black font-bold tracking-wide text-sm">
            remixjs
          </span>
        </li>
        <li className="flex items-center gap-x-2">
          <RiTailwindCssFill className="dark:text-white text-black w-6 h-6" />
          <span className="uppercase text-[#38bdf8] font-bold tracking-wide text-sm">
            tailwind
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Technologies;

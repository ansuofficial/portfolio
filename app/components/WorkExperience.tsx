function WorkExperience({ theme, styles }: any) {
  return (
    <div
      className={`bg-gradient-to-r from-white to-transparent px-4 py-2 rounded-lg space-y-2 overflow-hidden backdrop-blur relative ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <h1 className={`dark:text-white text-black text-xl relative z-10`}>
        Professional Experience
      </h1>
     
      <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Lead Frontend Developer - Jassehcodecamp
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            As a Lead Frontend Developer at Jassehcodecamp, I craft high performing,
            visually engaging web experiences using modern technologies. I collaborate
            closely with backend engineers, and stakeholders to build
            innovative, scalable solutions that deliver real impact.
          </p>
        </div>
      </div>
      <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Instructor - JassehCodeCamp
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
             Empowering the next generation of developers through hands-on instruction at
             JassehCodeCamp. I design and deliver practical coding sessions, mentor
             emerging engineers, and help shape their journey into professional software
             development.
          </p>
        </div>
      </div>
       <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Intern - Gomindz
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            Gained hands-on experience working with a dynamic team at Gomindz,
            where I contributed to innovative projects and honed my skills in a
            professional setting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;

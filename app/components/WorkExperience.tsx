function WorkExperience({ theme, styles }: any) {
  return (
    <div
      className={`bg-gradient-to-r from-white to-transparent px-4 py-2 rounded-lg space-y-2 overflow-hidden backdrop-blur relative ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <h1 className={`dark:text-white text-black text-xl relative z-10`}>
        Work Experience
      </h1>
      <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Atended Gomindz as an intern
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            I had the opportunity to work at Gomindz as an intern
          </p>
        </div>
      </div>
      <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Softwear Developer at Tritech
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            I currently work at Tritech as a Softwea Developer.
          </p>
        </div>
      </div>
      <div className="space-y-[4px] relative z-10">
        <div className="space-y-[2px]">
          <h1 className={`text-black font-bold tracking-wide`}>
            Teaching assistant at JasshehCodeCamp
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            I work as a Teaching assistant at JCC
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;

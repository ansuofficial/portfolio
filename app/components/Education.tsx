function Education({ theme, styles }: any) {
  return (
    <div
      className={`dark:bg-hoverShadow bg-base px-4 py-2 rounded-lg space-y-2 ${styles}`}
    >
      <h1 className={`dark:text-white text-black text-xl`}>Education</h1>
      <div className="space-y-[4px]">
        <div className="space-y-[2px]">
          <h1 className={`dark:text-white text-black font-bold tracking-wide`}>
            High school
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            I graduated from high school in mid 2022
          </p>
        </div>
        <div className="space-y-[2px]">
          <h1 className={`dark:text-white text-black font-bold tracking-wide`}>
            Indian Institution for Hardwear Technology (IIHT)
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            I attend IIHTH in 2022, where i did intruduction to computer science
          </p>
        </div>
        <div className="space-y-[2px]">
          <h1 className={`dark:text-white text-black font-bold tracking-wide`}>
            Jassehcodecamp (JCC)
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            2022-2023 i attended Jassehcodecamp junior develper program (JDP)
            part 1
          </p>
        </div>
        <div className="space-y-[2px]">
          <h1 className={`dark:text-white text-black font-bold tracking-wide`}>
            Jassehcodecamp (JCC)
          </h1>
          <p className={`dark:text-white text-black text-xs`}>
            2023-2024 i attended Jassehcodecamp junior develper program (JDP)
            part 2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;

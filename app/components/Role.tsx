function Role({ theme, styles } : any) {
  return (
    <div
      className={`bg-gradient-to-tr from-transparent dark:to-hoverShadow to-base px-4 py-2 rounded-lg flex items-center justify-center ${styles}`}
    >
      <h1 className={`dark:text-white text-black text-xl `}>Frontend Developer</h1>
    </div>
  );
}

export default Role;

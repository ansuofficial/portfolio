function Role({ theme, styles }: any) {
  return (
    <div
      className={`bg-gradient-to-tr from-transparent to-white px-4 py-2 rounded-lg flex items-center justify-center relative overflow-hidden ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>

      <h1 className={`text-black text-xl relative z-10`}>Frontend Developer</h1>
    </div>
  );
}

export default Role;

function About({ styles }: any) {
  return (
    <div
      className={`bg-gradient-to-r from-white to-transparent px-4 lg:py-2 rounded-lg space-y-2 relative overflow-hidden backdrop-blur-md ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <h1 className={` text-black text-xl font-bold relative z-10`}>
        Who the hell am i?
      </h1>
      <p className={`text-gray-900 text-sm tracking-wide relative z-10`}>
        I’m Ansumana, Frontend Engineer dedicated to creating elegant, high-performance, and user-focused experiences across platforms. I combine design precision with engineering expertise building scalable, accessible, and visually engaging interfaces powered by TypeScript, JavaScript, and React. I’m driven by a simple goal to craft intuitive digital experiences that inspire, perform, and endure.
      </p>
    </div>
  );
}

export default About;

// Finance
// Opportunities page

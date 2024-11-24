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
        I'm Ansumana, a creative softwear developer. I specialize in building
        visual appealing and user-friendly websites, and also stay up-to-date
        with cutting-edge technologies to drive business success. I deeply
        explore your request to prepare a web solution specifically for your
        needs. I do only what your projects demand and give you the possibility
        to save time and money.
      </p>
    </div>
  );
}

export default About;

// Finance
// Opportunities page

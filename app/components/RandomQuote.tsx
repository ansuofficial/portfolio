function RandomQuote({ styles, quote }: any) {
  return (
    <div
      className={`bg-gradient-to-l from-transparent to-white px-4 py-2 rounded-lg space-y-4 overflow-hidden relative  ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <h1
        className={`text-black text-xl underline decoration-primary relative z-10`}
      >
        What Drives Me as a Developer
      </h1>
      <h2 className={`text-black relative z-10`}>{quote.message}</h2>
    </div>
  );
}

export default RandomQuote;

function RandomQuote({ styles, quote }: any) {

  return (
    <div
      className={`bg-gradient-to-tl from-transparent dark:to-hoverShadow to-base px-4 py-2 rounded-lg space-y-4 ${styles}`}
    >
      <h1
        className={`dark:text-white text-black text-xl underline dark:decoration-primary decoration-sencondary`}
      >
        What Drives Me as a Developer
      </h1>
      <h2 className={`dark:text-white text-black`}>{quote.message}</h2>
    </div>
  );
}

export default RandomQuote;

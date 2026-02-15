import { memo } from "react";

interface RandomQuoteProps {
  styles?: string;
  quote: {
    message: string;
  };
}

function RandomQuote({ styles = "", quote }: RandomQuoteProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 space-y-4 ${styles}`}
      role="region"
      aria-labelledby="quote-heading"
    >
      <h1
        id="quote-heading"
        className="text-white text-xl font-display font-bold tracking-tight"
      >
        What Drives Me
      </h1>
      <blockquote className="text-white/80 text-base leading-relaxed italic">
        "{quote.message}"
      </blockquote>
    </div>
  );
}

export default memo(RandomQuote);

function FancyImage({ theme, styles }: any) {
  return (
    <div
      className={`bg-transparent rounded-lg ring-1 dark:ring-hoverShadow ring-sencondary ${styles}`}
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src="/moving-elements.gif"
        alt="interactive-A"
      />
    </div>
  );
}

export default FancyImage;

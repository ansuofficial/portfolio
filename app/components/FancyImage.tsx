function FancyImage({ theme, styles }: any) {
  return (
    <div
      className={`bg-transparent rounded-lg ${styles}`}
    >
      <img
        className="w-full h-full object-cover rounded-lg"
        src="/pricing-castle_2x_wldbtl.webp"
        alt="interactive-A"
      />
    </div>
  );
}

export default FancyImage;

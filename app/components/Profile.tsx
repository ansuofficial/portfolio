function Profile({ styles }: any) {
  return (
    <div
      className={`dark:bg-hoverShadow bg-base px-4 py-2 rounded-lg flex flex-col justify-center items-center ${styles}`}
    >
      <div className="h-44 w-44 relative rounded-full overflow-hidden">
        <img className="dark:block hidden" src={`/primary-blob.svg`} alt="primary-blob" />
        <img
          className="dark:hidden"
          src={`/secondary-blob.svg`}
          alt="secondary-blob"
        />
        <img
          className="object-cover w-full absolute top-0"
          src="/ansu.png"
          alt=""
        />
      </div>
      <h1 className={`dark:text-white text-black text-xl`}>Ansumana Badjie</h1>
    </div>
  );
}

export default Profile;

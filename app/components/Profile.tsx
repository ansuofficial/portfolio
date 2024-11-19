function Profile({ styles }: any) {
  return (
    <div
      className={`bg-gradient-to-t from-gray-200 to-transparent px-4 py-2 rounded-lg flex flex-col justify-center items-center relative overflow-hidden backdrop-blur ${styles}`}
    >
      <div className="absolute top-0 ring-0 h-full bg-green-100 w-full left-0 right-0 opacity-50"></div>
      <div className="h-44 w-44 relative rounded-full overflow-hidden z-10">
        {/* <img className="block" src={`/primary-blob.svg`} alt="primary-blob" /> */}
        {/* <img
          className="hidden"
          src={`/secondary-blob.svg`}
          alt="secondary-blob"
        /> */}
        <img
          className="object-cover w-full absolute top-0"
          src="/ansu-dp-transparent.png"
          alt=""
        />
      </div>
      <h1 className={`text-gray-950  text-xl text-center relative z-10`}>
        Ansumana Badjie
      </h1>
    </div>
  );
}

export default Profile;

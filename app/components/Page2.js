const Page2 = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-around px-5 pt-8 md:px-60 h-auto md:h-[30rem] border-b-8 border-borderBottom">
      <div className="text-white w-full md:w-[40rem] text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Enjoy on your TV</h1>
        <p className="text-md md:text-xl pt-2 md:pt-5">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
      </div>
      <div className="pt-5 md:pt-0">
        <img src="/feature-1.png" className="h-auto md:h-[28rem] w-full" alt="Tvbox Image" />
      </div>
    </div>
  );
};

export default Page2;

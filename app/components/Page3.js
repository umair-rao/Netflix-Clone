const Page3 = () => {
  return (
    <div className="bg-black flex flex-col-reverse md:flex-row items-center justify-around px-5 pt-8 md:px-60 h-auto md:h-[30rem] border-b-8 border-borderBottom">
      <div className="pb-5 md:pb-0">
        <img src="/feature-2.png" className="h-auto md:h-[24rem] w-full" alt="Tvbox Image" />
      </div>
      <div className="text-white w-full md:w-[35rem] text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Download your shows to watch offline</h1>
        <p className="text-sm md:text-xl pt-2 md:pt-5">
          Save your favorites easily and always have something to watch.
        </p>
      </div>
    </div>
  );
};

export default Page3;

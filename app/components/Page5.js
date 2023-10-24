const Page5 = () => {
  return (
    <div className="bg-black flex flex-col-reverse md:flex-row items-center justify-around px-5 pt-8 md:px-60 h-auto md:h-[30rem] border-b-8 border-borderBottom">
      <div className="pb-5 md:pb-0">
        <img src="/feature-3.png" className="h-auto md:h-[24rem] w-full" alt="Tvbox Image" />
      </div>
      <div className="text-white w-full md:w-[32rem] text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">Create profiles for kids</h1>
        <p className="text-sm md:text-xl pt-2 md:pt-5">
          Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
        </p>
      </div>
    </div>
  );
};

export default Page5;

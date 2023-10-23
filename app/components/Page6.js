const Page6 = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-around h-screen px-60 border-b-8 border-borderBottom">
      <div className="text-white pt-5 b">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
      </div>
      <div className="grid gap-3">
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>What is Netflix</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>How much dose NEtflix cost?</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>Where can I watch?</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>How do I cancel?</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>What can I watch on Netflix?</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
        <div className="bg-cardGrey text-white text-2xl w-[70rem] h-20 flex items-center justify-between px-6 cursor-pointer hover:bg-hoverCard">
            <div>
                <h1>Is Netflix good for kids?</h1>
            </div>
            <div className="text-5xl font-light">
                +
            </div>
        </div>
      </div>
      <div className="flex flex-col pt-5">
        <div className="pb-4">
          <p className="text-white text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <input
              type="email"
              placeholder="Email adress"
              className="bg-black text-white opacity-70 h-14 w-96 border-2 border-slate-100 rounded px-4 py-2"
            />
          </div>
          <div className="pl-2">
            <button className="bg-red text-white font-bold py-2 px-4 rounded h-14 w-56">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;

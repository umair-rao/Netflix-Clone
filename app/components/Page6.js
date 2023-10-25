"use client";

import { useState } from "react";

const Page6 = () => {
  const [tab1, setTab1] = useState(true);

  const handle1 = () => {
    console.log("Umair Pressed me");
    setTab1(!tab1)
  };

  return (
    <div className="bg-black flex flex-col items-center justify-around min-h-screen px-5 md:px-60 border-b-8 border-borderBottom">
      <div className="text-white pt-5">
        <h1 className="text-4xl text-center md:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="grid gap-3 w-full md:w-[70rem] mt-5">
        <div
          onClick={handle1}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>What is Netflix?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">{tab1 ? "x" : "+"}</div>
        </div>
        {tab1 && <div className="bg-cardGrey text-white text-md md:text-2xl display:none transition-all duration-500" >
            <span>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want without a
              single commercial – all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </span>
          </div>}
        <div className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard">
          <div>
            <h1>How much doses Netflix cost?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
        <div className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard">
          <div>
            <h1>Where can I watch?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
        <div className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard">
          <div>
            <h1>How do I cancel?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
        <div className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard">
          <div>
            <h1>What can I watch on Netflix?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
        <div className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard">
          <div>
            <h1>Is Netflix good for kids?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
      </div>
      <div className="flex flex-col pt-5 w-full md:w-[70rem]">
        <div className="pb-4">
          <p className="text-white text-md text-center md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="pb-3 md:pb-0">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black text-white opacity-70 h-12 md:h-14 w-full md:w-96 border-2 border-slate-100 rounded px-3 md:px-4 py-1 md:py-2"
            />
          </div>
          <div className="pl-0 md:pl-2 pt-3 pb-5 md:pt-0">
            <button className="bg-red text-white font-bold py-2 px-4 rounded w-full md:w-56 h-12 md:h-14">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;

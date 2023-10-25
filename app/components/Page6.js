"use client";

import { useState } from "react";

const Page6 = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(true);
  const [tab3, setTab3] = useState(true);
  const [tab4, setTab4] = useState(true);
  const [tab5, setTab5] = useState(true);
  const [tab6, setTab6] = useState(true);

  const handle1 = () => {
    setTab1(!tab1);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
  };

  const handle2 = () => {
    setTab2(!tab2);
    setTab1(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
  };
  const handle3 = () => {
    setTab3(!tab3);
    setTab1(false);
    setTab2(false);
    setTab4(false);
    setTab5(false);
    setTab6(false);
  };
  const handle4 = () => {
    setTab4(!tab4);
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab5(false);
    setTab6(false);
  };
  const handle5 = () => {
    setTab5(!tab5);
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab6(false);
  };
  const handle6 = () => {
    setTab6(!tab6);
    setTab5(!tab5);
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(false);
    setTab5(false);
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
          <div className="text-3xl md:text-5xl font-light">
            {tab1 ? "x" : "+"}
          </div>
        </div>
        {tab1 && (
          <div className="bg-cardGrey text-white px-5 py-2 text-md md:text-2xl display:none transition-all duration-500">
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
          </div>
        )}
        <div
          onClick={handle2}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>How much doses Netflix cost?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">
            {tab2 ? "x" : "+"}
          </div>
        </div>
        {tab2 && (
          <div className="bg-cardGrey text-white px-5 py-2 text-md md:text-2xl display:none transition-all duration-500">
            <span>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              Rs250 to Rs1,100 a month. No extra costs, no contracts.
            </span>
          </div>
        )}
        <div
          onClick={handle3}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>Where can I watch?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">
            {tab3 ? "x" : "+"}
          </div>
        </div>
        {tab3 && (
          <div className="bg-cardGrey text-white px-5 py-2 text-md md:text-2xl display:none transition-all duration-500">
            <span>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br />
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.{" "}
            </span>
          </div>
        )}
        <div
          onClick={handle4}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>How do I cancel?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">
            {tab4 ? "x" : "+"}
          </div>
        </div>
        {tab4 && (
          <div className="bg-cardGrey text-white px-5 py-2 text-md md:text-2xl display:none transition-all duration-500">
            <span>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime. <br />
            </span>
          </div>
        )}
        <div
          onClick={handle5}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>What can I watch on Netflix?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">
            {tab5 ? "x" : "+"}
          </div>
        </div>
        {tab5 && (
          <div className="bg-cardGrey text-white px-5 py-2 text-md md:text-2xl display:none transition-all duration-500">
            <span>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </span>
          </div>
        )}
        <div
          onClick={handle6}
          className="bg-cardGrey text-white text-xl md:text-2xl h-16 md:h-20 flex items-center justify-between px-3 md:px-6 cursor-pointer hover:bg-hoverCard"
        >
          <div>
            <h1>Is Netflix good for kids?</h1>
          </div>
          <div className="text-3xl md:text-5xl font-light">+</div>
        </div>
        {tab6 && (
        <div className="bg-cardGrey text-white px-5 py-2  text-md md:text-2xl display:none transition-all duration-500">
          <span>
            The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and movies
            in their own space.
            <br />
            <br />
            Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see.
          </span>
        </div>
      )}
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

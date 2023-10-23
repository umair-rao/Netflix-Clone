import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div className="h-[40rem]">
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: 'url("/header-image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <Navbar />
          <div className="flex items-center justify-center flex-col pt-40">
            <div>
              <h1 className="text-5xl text-white font-bold text-center">
                Unlimited movies, TV shows, and more
              </h1>
              <h3 className="text-white text-center text-2xl pt-5">
                Watch anywhere. Cancel anytime.
              </h3>
              <p className="text-white text-center text-xl pt-5">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="flex pt-5">
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
      </div>
    </div>
  );
};

export default Homepage;

import Navbar from "./Navbar";

const Homepage = () => {
  return (
    <div>
      <div
        className="w-full h-96 md:h-[40rem] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/header-image.png")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10">
          <Navbar />
          <div className="flex items-center justify-center flex-col md:pt-40 pt-10 px-5">
            <div>
              <h1 className="text-2xl md:text-5xl text-white font-bold text-center">
                Unlimited movies, TV shows, and more
              </h1>
              <h3 className="text-white text-center text-lg md:text-2xl pt-2 md:pt-5">
                Watch anywhere. Cancel anytime.
              </h3>
              <p className="text-white text-center text-md md:text-xl pt-2 md:pt-5">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center pt-3 md:flex-row md:pt-5">
              <div className="pr-0 md:pr-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-black text-white opacity-70 h-12 md:h-14 w-80 md:w-96 border-2 border-slate-100 rounded px-3 md:px-4 py-1 md:py-2"
                />
              </div>
              <div className="pl-0 md:pl-2 pt-2 md:pt-0">
                <button className="bg-red text-white font-bold py-2 px-4 rounded w-36 md:w-56 h-12 md:h-14">
                  Get Started  {'>'}
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

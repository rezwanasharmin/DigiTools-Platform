import React from 'react';
import banner from "../../assets/banner.png";
import play from "../../assets/Play.png"

const Banner = () => {
  return (
    <div>
      <section className="relative bg-white pt-16 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-8">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-medium px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
                </span>
                New: AI-Powered Tools Available
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Supercharge Your<br />
                Digital Workflow
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-600 max-w-lg">
                Access premium AI tools, design assets, templates, and productivity
                software—all in one place. Start creating faster today.
               Explore Products
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-200 text-white font-semibold rounded-full transition-all duration-300 active:scale-95 shadow-lg">
                  Explore Products
                </button>

                <button className="px-8 py-3.5 cursor-pointer border-2 border-gray-300 hover:bg-violet-700 text-gray-700 hover:text-white font-semibold rounded-full flex items-center gap-2 transition-all duration-300 ">
                  <img src={play} alt="" />
                  Watch Demo
                </button>
              </div>

              {/* Trust Text */}
              {/* <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="text-emerald-500">✔</span>
              Explore Products
            </p> */}
            </div>

            {/* Right Side - Image */}
            <div className="relative flex justify-center">
              <img
                src={banner}         // Make sure to place your image in public folder
                alt="Digital Workflow"
                className="w-full max-w-lg rounded-2xl shadow-2xl"
              />

              {/* Optional glowing effect overlay */}
              <div className="absolute -inset-4 bg-linear-to-r from-violet-400/10 to-purple-400/10 rounded-[2.5rem] -z-10 blur-3xl"></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
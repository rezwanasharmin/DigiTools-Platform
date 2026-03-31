import React from 'react';
import user from "../../assets/user.png";
import packages from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started In 3 Steps
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">


            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-violet-200 relative overflow-hidden">
              <div className="absolute top-8 right-8 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full z-10">
                01
              </div>

              <div className="flex justify-center mt-10 mb-5">
                <div className="w-28 h-28 bg-violet-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={user}
                    alt="Create Account"
                    className="w-13 h-13 object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Create Account
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Sign up for free in seconds. No credit card required to get started.
                </p>
              </div>
            </div>


            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-violet-200 relative overflow-hidden">
              <div className="absolute top-8 right-8 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full z-10">
                02
              </div>

              <div className="flex justify-center mt-10 mb-5">
                <div className="w-28 h-28 bg-violet-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={packages}
                    alt="Choose Products"
                    className="w-13 h-13 object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Choose Products
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>


            <div className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-violet-200 relative overflow-hidden">
              <div className="absolute top-8 right-8 bg-linear-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full z-10">
                03
              </div>

              <div className="flex justify-center mt-10 mb-5">
                <div className="w-28 h-28 bg-violet-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={rocket}
                    alt="Start Creating"
                    className="w-13 h-13 object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Start Creating
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15.5px]">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Steps;
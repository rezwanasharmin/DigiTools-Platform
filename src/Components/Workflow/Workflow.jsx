import React from 'react';

const Workflow = () => {
    return (
        <div>
            <section className="bg-linear-to-br from-violet-600 via-purple-600 to-fuchsia-600 py-20 md:py-28 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready To Transform Your Workflow?
        </h2>

        
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-4">
          <span className='block'>Join thousands of professionals who are already using DigiTools to work smarter.</span>
        </p>
        
        <p className="text-white mb-10">
          Start your free trial today.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="px-8 py-3.5 bg-white text-violet-700 font-semibold rounded-full hover:bg-gray-100 transition-all active:scale-95 text-base w-full sm:w-auto">
            Explore Products
          </button>
          
          <button className="px-8 py-3.5 border-2 border-white hover:border-white font-semibold rounded-full transition-all active:scale-95 text-base w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        
        <p className="text-white text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
        </div>
    );
};

export default Workflow;
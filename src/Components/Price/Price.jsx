import React from 'react';

const Price = () => {
    return (
        <div>
            <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards - Same Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:border-violet-200 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Starter</h3>
            <p className="text-gray-500 mb-6">Perfect for getting started</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/Month</span>
            </div>

            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-3 text-gray-700">✓ Access to 10 free tools</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Basic templates</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Community support</li>
              <li className="flex items-center gap-3 text-gray-700">✓ 1 project per month</li>
            </ul>

            <button className="mt-10 w-full py-3.5 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-700 text-white font-semibold rounded-2xl transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-linear-to-r from-violet-800 to-fuchsia-800 border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:border-violet-200 transition-all relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold text-white mb-1">Pro</h3>
            <p className="text-white mb-6">Best for professionals</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-white">$29</span>
              <span className="text-white">/Month</span>
            </div>

            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-3 text-white">✓ Access to all premium tools</li>
              <li className="flex items-center gap-3 text-white">✓ Unlimited templates</li>
              <li className="flex items-center gap-3 text-white">✓ Priority support</li>
              <li className="flex items-center gap-3 text-white">✓ Unlimited projects</li>
              <li className="flex items-center gap-3 text-white">✓ Cloud sync</li>
              <li className="flex items-center gap-3 text-white">✓ Advanced analytics</li>
            </ul>

            <button className="mt-10 w-full py-3.5 bg-white hover:bg-linear-to-r from-violet-600 to-fuchsia-600 hover:text-white text-violet-700 font-semibold rounded-2xl transition-all">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full hover:border-violet-200 transition-all">
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">Enterprise</h3>
            <p className="text-gray-500 mb-6">For teams and businesses</p>
            
            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500">/Month</span>
            </div>

            <ul className="space-y-4 mb-auto">
              <li className="flex items-center gap-3 text-gray-700">✓ Everything in Pro</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Team collaboration</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Custom integrations</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Dedicated support</li>
              <li className="flex items-center gap-3 text-gray-700">✓ SLA guarantee</li>
              <li className="flex items-center gap-3 text-gray-700">✓ Custom branding</li>
            </ul>

            <button className="mt-10 w-full py-3.5 bg-linear-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-700 text-white font-semibold rounded-2xl transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Price;
import React from 'react';

const Stats = () => {
    const stats = [
    {
      number: "50K+",
      label: "Active Users",
    },
    {
      number: "200+",
      label: "Premium Tools",
    },
    {
      number: "4.9",
      label: "Rating",
    },
  ];
    return (
        <div>
            <div className="w-full bg-linear-to-r from-violet-600 to-purple-600 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
          
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center ${index !== 2 ? 'md:border-r border-white/30' : ''}`}
            >
              <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
        </div>
    );
};

export default Stats;
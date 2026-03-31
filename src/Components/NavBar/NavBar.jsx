import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NavBar = ({ cartCount = 0 }) => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (

    <div>
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">


            <h1 className="text-3xl font-bold  bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent tracking-tight">
              DigiTools
            </h1>

            <div className="hidden md:flex items-center gap-x-8 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
              <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
            </div>


            <div className="flex items-center gap-x-6">

              <div className="relative cursor-pointer">
                <ShoppingCart size={24} className="text-gray-700 hover:text-violet-600 transition-colors" />
                {cartCount > 0 && (
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">
                    {cartCount}
                  </div>
                )}
              </div>


              <button className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors">

                Login
              </button>


              <button className="px-6 py-2.5 cursor-pointer bg-linear-to-r from-violet-600 to-fuchsia-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-full transition-all">
                Get Started
              </button>


              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-violet-600"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-6 bg-white">
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
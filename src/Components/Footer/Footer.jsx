
import { CameraIcon, X } from 'lucide-react';
import React from 'react';


const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0a0a0a] text-gray-400 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10 text-center lg:text-left">


            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
              <p className="leading-relaxed text-gray-400">
                Premium digital tools for creators, <br/> professionals, and businesses.
                Work smarter <br/> with our suite of powerful tools.
              </p>
            </div>


            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-5 text-lg">Product</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>


            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-5 text-lg">Company</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>


            <div className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-5 text-lg">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>


            <div className="lg:col-span-1">
              <h3 className="text-white font-semibold mb-5 text-lg">Social Links</h3>
              <div className="flex gap-4">
                <a href="#" className=" w-10 h-10 bg-white rounded-full text-black flex items-center justify-center transition-all hover:scale-110">
                  <CameraIcon size={22} />
                </a>
                <a href="#" className=" w-10 h-10 bg-white rounded-full text-black flex items-center justify-center transition-all hover:scale-110">
                  <CameraIcon size={22} />
                </a>
                <a href="#" className=" w-10 h-10 bg-white rounded-full text-black flex items-center justify-center transition-all hover:scale-110">
                  <X size={22} />
                </a>
              </div>
            </div>

          </div>


          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-center lg:justify-between items-center gap-6 text-sm text-center lg:text-left">
            <p className="text-gray-500">
              © 2026 DigiTools. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
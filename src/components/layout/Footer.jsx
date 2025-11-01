import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 relative overflow-hidden">
      {/* Background Effects */}
    
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center md:text-left">
            {/* Enhanced Logo and Description */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto lg:h-10 transition-transform duration-300 hover:scale-105"
                    src="/logopin.jpeg"
                    alt="Pinnacle Studioz Logo"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-0.5">Pinnacle Studioz</h3>
                  <p className="text-slate-400 text-xs">Gaming Excellence</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-3 leading-relaxed max-w-md text-sm font-medium">
                The ultimate gaming platform for players worldwide. Experience 
                next-generation gaming with cutting-edge technology and immersive 
                gameplay across all platforms.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 group justify-center md:justify-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-sm">📞</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">+351 910 554 305</div>
                    <div className="text-slate-300 text-xs font-medium">Lisbon, Portugal</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 group justify-center md:justify-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-sm">✉️</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Contact Us</div>
                    <div className="text-slate-300 text-xs font-medium">muhammadmajidzia@pinnaclestudioz.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="mb-2 text-base font-bold text-white flex items-center gap-2">
                <span className="text-blue-500">🎮</span>
                Platform
              </h4>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="#mobile" 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span>Mobile Gaming</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#home" 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span>Home Gaming</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#showcase" 
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group font-medium"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    <span>Our Partners</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="mb-2 text-base font-bold text-white flex items-center gap-2">
                <span className="text-purple-500">🌐</span>
                Connect
              </h4>
              <div className="space-y-2">
                <div className="flex gap-3 justify-center md:justify-start">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <span className="text-white text-sm">📘</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <span className="text-white text-sm">📷</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25"
                  >
                    <span className="text-white text-sm">🐦</span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-3 pb-3">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-center">
            <p className="text-slate-300 text-xs font-medium">
              &copy; 2025 <span className="text-white font-bold">PINNACLESTUDIOZ</span>. All rights reserved.
            </p>
            <span className="hidden md:inline text-slate-600 mx-2">|</span>
            <div className="flex gap-3 text-xs">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Terms</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

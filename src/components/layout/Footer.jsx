import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 relative overflow-hidden">
      {/* Background Effects */}
    
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Enhanced Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-auto lg:h-12 transition-transform duration-300 hover:scale-105"
                    src="/logopin.jpeg"
                    alt="Pinakle Studioz Logo"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Pinakle Studioz</h3>
                  <p className="text-slate-400 text-sm">Gaming Excellence</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed max-w-md text-base font-medium">
                The ultimate gaming platform for players worldwide. Experience 
                next-generation gaming with cutting-edge technology and immersive 
                gameplay across all platforms.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-lg">📞</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">+351 910 554 305</div>
                    <div className="text-slate-300 text-sm font-medium">Lisbon, Portugal</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-lg">✉️</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Contact Us</div>
                    <div className="text-slate-300 text-sm font-medium">muhammadmajidzia@pinnaklestudioz.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="mb-3 text-lg font-bold text-white flex items-center gap-2">
                <span className="text-blue-500">🎮</span>
                Platform
              </h4>
              <ul className="space-y-2">
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
            <div>
              <h4 className="mb-3 text-lg font-bold text-white flex items-center gap-2">
                <span className="text-purple-500">🌐</span>
                Connect
              </h4>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <span className="text-white text-lg">📘</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25"
                  >
                    <span className="text-white text-lg">📷</span>
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25"
                  >
                    <span className="text-white text-lg">🐦</span>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-4 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm font-medium">
                &copy; 2025 <span className="text-white font-bold">PINAKLESTUDIOZ</span>. All rights reserved.
              </p>
            </div>
            
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Terms of Service</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

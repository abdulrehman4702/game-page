import React from "react";

const PlatformSection = () => {
  return (
    <section id="mobile" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-cyan-50/30 -z-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-ambient-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-ambient-float" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 text-green-600 font-semibold text-sm tracking-wide mb-6 animate-fade-in-up">
            📱 MOBILE GAMING REVOLUTION
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Visual */}
          <div className="relative h-96 group">
            {/* Main Phone Mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-slate-700 group-hover:scale-105 transition-transform duration-500">
              {/* Screen */}
              <div className="absolute inset-4 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-2xl relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop')`
                  }}
                >
                  {/* Game UI Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">🎮</div>
                    <div className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded">Level 25</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-slate-800 text-xs font-bold mb-1">High Score</div>
                      <div className="text-green-600 text-lg font-black">1,247,890</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Home Button */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-slate-600 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-2xl shadow-lg shadow-green-500/25 animate-float flex items-center justify-center text-white text-xl">
              ⚡
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg shadow-orange-500/25 animate-float flex items-center justify-center text-white text-lg" style={{animationDelay: '2s'}}>
              🏆
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-8 rounded-3xl blur-2xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute inset-12 rounded-3xl blur-xl bg-gradient-to-br from-green-500/10 to-transparent -z-10"></div>
          </div>
          
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-green-600 via-cyan-600 to-green-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Mobile Revolution
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
              The mobile game industry is constantly increasing as users'
              engagement towards apps is increasing at the same time. Experience
              seamless gaming on the go with cutting-edge mobile technology.
            </p>
            
            {/* Feature List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <span className="font-medium">Cross-platform compatibility</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <span className="font-medium">Real-time multiplayer gaming</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <span className="font-medium">Cloud save synchronization</span>
              </div>
            </div>
            
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300 transform relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <span>Download Now</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">📱</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;

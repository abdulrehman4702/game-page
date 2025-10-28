import React from "react";
import GamingCarousel from "../../components/GamingCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Enhanced Background with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/10 to-purple-100/10 animate-gradient-shift bg-[length:400%_400%] -z-10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-ambient-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-ambient-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-green-400/30 rounded-full animate-ambient-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 right-40 w-1 h-1 bg-orange-400/30 rounded-full animate-ambient-float" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-600 font-semibold text-sm tracking-wide mb-6 animate-fade-in-up">
            🎮 NEXT-GEN GAMING
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-slate-800 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Play Beyond <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">Limits</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Experience the ultimate gaming revolution across all platforms.
            Dive into immersive worlds, compete globally, and dominate the
            leaderboards with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 transform">
              🚀 Start Playing
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
              ▶️ Watch Trailer
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10M+</h3>
              <p className="text-slate-600 text-sm font-medium">Active Players</p>
            </div>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">500+</h3>
              <p className="text-slate-600 text-sm font-medium">Games Available</p>
            </div>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</h3>
              <p className="text-slate-600 text-sm font-medium">Countries</p>
            </div>
          </div>
        </div>

        {/* Gaming Features Carousel */}
        <div>
          <GamingCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;

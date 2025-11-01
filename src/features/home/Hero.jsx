import React from "react";
import GamingCarousel from "../../components/GamingCarousel";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Hero Text */}
        <div className="text-center lg:text-left">
          
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-slate-900 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Our Services
          </h1>
          
          <p className="text-sm md:text-base text-slate-700 mb-4 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We provide comprehensive gaming solutions across all platforms.
            From mobile apps to web experiences, we deliver cutting-edge
            technology and immersive gameplay experiences.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border-2 border-blue-200/50 hover:border-blue-300/70 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Mobile</h3>
              <p className="text-xs text-slate-700">iOS & Android Apps</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl border-2 border-purple-200/50 hover:border-purple-300/70 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Website</h3>
              <p className="text-xs text-slate-700">Web Applications</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border-2 border-green-200/50 hover:border-green-300/70 hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📲</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">App</h3>
              <p className="text-xs text-slate-700">Cross-platform Apps</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl border-2 border-orange-200/50 hover:border-orange-300/70 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🎮</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Games</h3>
              <p className="text-xs text-slate-700">Gaming Solutions</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl border-2 border-indigo-200/50 hover:border-indigo-300/70 hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">✅</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">QA</h3>
              <p className="text-xs text-slate-700">Quality Assurance</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl border-2 border-pink-200/50 hover:border-pink-300/70 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300 transform group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">Project Manager</h3>
              <p className="text-xs text-slate-700">Project Management</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center lg:text-left group">
              <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">10M+</div>
              <p className="text-slate-700 text-xs font-medium">Active Players</p>
            </div>
            <div className="text-center lg:text-left group">
              <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">550+</div>
              <p className="text-slate-700 text-xs font-medium">Games Available</p>
            </div>
            <div className="text-center lg:text-left group">
              <div className="text-xl lg:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
              <p className="text-slate-700 text-xs font-medium">Countries</p>
            </div>
          </div>
        </div>

        {/* Gaming Features Carousel */}
        <div className="hidden lg:block">
          <GamingCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;

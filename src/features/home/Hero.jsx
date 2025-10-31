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
          
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-slate-800 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">Services</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            We provide comprehensive gaming solutions across all platforms.
            From mobile apps to web experiences, we deliver cutting-edge
            technology and immersive gameplay experiences.
          </p>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Mobile</h3>
              <p className="text-sm text-slate-600">iOS & Android Apps</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl border border-purple-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Website</h3>
              <p className="text-sm text-slate-600">Web Applications</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl border border-green-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📲</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">App</h3>
              <p className="text-sm text-slate-600">Cross-platform Apps</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl border border-orange-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎮</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Games</h3>
              <p className="text-sm text-slate-600">Gaming Solutions</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl border border-indigo-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">✅</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">QA</h3>
              <p className="text-sm text-slate-600">Quality Assurance</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl border border-pink-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 transform group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">Project Manager</h3>
              <p className="text-sm text-slate-600">Project Management</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">10M+</h3>
              <p className="text-slate-600 text-sm font-medium">Active Players</p>
            </div>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">550+</h3>
              <p className="text-slate-600 text-sm font-medium">Games Available</p>
            </div>
            <div className="text-center lg:text-left group">
              <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</h3>
              <p className="text-slate-600 text-sm font-medium">Countries</p>
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

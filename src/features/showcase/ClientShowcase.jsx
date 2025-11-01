import React, { useState, useEffect } from "react";

const ClientShowcase = () => {
  const collaborators = [
    {
      id: 1,
      name: "Rockville",
      logo: "/logo1.jpeg",
      description: "Cutting-edge technology solutions driving innovation in the gaming industry. Partnering to deliver exceptional digital experiences.",
      gradient: "from-blue-500 to-purple-500",
      gradientLight: "from-blue-100 to-purple-100",
      icon: "🚀",
      shadowColor: "shadow-blue-500/20"
    },
    {
      id: 2,
      name: "Duolab",
      logo: "/logo2.jpeg",
      description: "Pioneering research and development in gaming technologies. Transforming ideas into revolutionary gaming experiences.",
      gradient: "from-green-500 to-cyan-500",
      gradientLight: "from-green-100 to-cyan-100",
      icon: "💡",
      shadowColor: "shadow-green-500/20"
    },
    {
      id: 3,
      name: "Rebel Car",
      logo: "/logo3.jpeg",
      description: "Premium e-sport sim racing experiences. Leading the future of competitive gaming with immersive racing simulations.",
      gradient: "from-orange-500 to-red-500",
      gradientLight: "from-orange-100 to-red-100",
      icon: "🏎️",
      shadowColor: "shadow-orange-500/20"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % collaborators.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, collaborators.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % collaborators.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + collaborators.length) % collaborators.length);
  };

  return (
    <section id="showcase" className="py-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-ambient-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-ambient-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-4 shadow-lg border border-blue-100/50 animate-fade-in-up">
            <span className="text-lg animate-bounce">⚡</span>
            <span className="text-blue-600 font-semibold text-xs tracking-wide uppercase">Our Partners</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Meet Our Collaborators
          </h1>
          
          <p className="text-sm md:text-base text-slate-700 max-w-3xl mx-auto mb-4 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Partnering with top innovators and teams to shape the future of gaming and technology.
          </p>
          
          {/* Enhanced Stats */}
          <div className="flex justify-center gap-4 md:gap-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="text-center group">
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-slate-600 font-medium text-xs">Partners</div>
            </div>
            <div className="text-center group">
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">100+</div>
              <div className="text-slate-600 font-medium text-xs">Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-600 font-medium text-xs">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Collaborators Slider */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group border-2 border-blue-100"
            aria-label="Previous slide"
          >
            <span className="text-slate-700 group-hover:text-blue-600 text-2xl font-bold transition-colors duration-300">←</span>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group border-2 border-purple-100"
            aria-label="Next slide"
          >
            <span className="text-slate-700 group-hover:text-purple-600 text-2xl font-bold transition-colors duration-300">→</span>
          </button>

          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {collaborators.map((collaborator, index) => (
              <div
                key={collaborator.id}
                className="w-full flex-shrink-0 flex items-center justify-center px-4 md:px-6"
              >
                <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-2xl ${collaborator.shadowColor} border-2 border-white/50 hover:shadow-3xl hover:scale-[1.02] transition-all duration-700 w-full max-w-2xl mx-auto relative overflow-hidden group`}>
                  {/* Enhanced Background Gradients */}
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${collaborator.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-15 transition-opacity duration-700 animate-pulse`}></div>
                  <div className={`absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr ${collaborator.gradientLight} opacity-30 rounded-full blur-2xl group-hover:opacity-50 transition-opacity duration-700`}></div>
                  
                  {/* Animated Border Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${collaborator.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700 -z-10`}></div>
                  
                  {/* Icon Section */}
                  <div className="flex items-center justify-center mb-4 relative z-10">
                    <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${collaborator.gradient} rounded-3xl flex items-center justify-center shadow-xl ${collaborator.shadowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <span className="text-3xl md:text-4xl">{collaborator.icon}</span>
                    </div>
                  </div>
                  
                  {/* Logo Section */}
                  <div className="flex items-center justify-center h-32 md:h-40 mb-4 relative z-10 bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-100 group-hover:border-blue-200 transition-colors duration-500">
                    <img
                      src={collaborator.logo}
                      alt={collaborator.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 group-hover:scale-105 transition-transform duration-500">
                      {collaborator.name}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-4 max-w-xl mx-auto">
                      {collaborator.description}
                    </p>
                    
                    {/* Enhanced Decorative Line */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <div className={`h-1.5 w-16 bg-gradient-to-r ${collaborator.gradient} rounded-full`}></div>
                      <div className={`w-3 h-3 bg-gradient-to-br ${collaborator.gradient} rounded-full`}></div>
                      <div className={`h-1.5 w-16 bg-gradient-to-l ${collaborator.gradient} rounded-full`}></div>
                    </div>

                    {/* Action Button */}
                    <button className={`px-6 py-3 bg-gradient-to-r ${collaborator.gradient} text-white text-sm font-semibold rounded-xl shadow-lg ${collaborator.shadowColor} hover:shadow-xl hover:scale-105 transition-all duration-300 transform relative overflow-hidden group/btn`}>
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Learn More</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-l ${collaborator.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {collaborators.map((collaborator, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${collaborator.gradient} scale-125 shadow-lg` 
                    : 'bg-slate-300 hover:bg-slate-400 hover:scale-110'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="flex justify-center mt-4">
            <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-slate-200">
              <span className="text-slate-700 font-semibold text-sm">
                <span className="text-blue-600 font-bold">{currentIndex + 1}</span> / {collaborators.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

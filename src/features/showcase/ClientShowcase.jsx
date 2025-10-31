import React, { useState, useEffect } from "react";

const ClientShowcase = () => {
  const collaborators = [
    {
      id: 1,
      name: "Rockville",
      logo: "/logo1.jpeg",
      description: "Cutting-edge technology solutions driving innovation in the gaming industry. Partnering to deliver exceptional digital experiences.",
      gradient: "from-blue-500 to-purple-500",
      icon: "🚀"
    },
    {
      id: 2,
      name: "Duolab",
      logo: "/logo2.jpeg",
      description: "Pioneering research and development in gaming technologies. Transforming ideas into revolutionary gaming experiences.",
      gradient: "from-green-500 to-cyan-500",
      icon: "💡"
    },
    {
      id: 3,
      name: "Rebel Car",
      logo: "/logo3.jpeg",
      description: "Premium e-sport sim racing experiences. Leading the future of competitive gaming with immersive racing simulations.",
      gradient: "from-orange-500 to-red-500",
      icon: "🏎️"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % collaborators.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [collaborators.length]);

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 text-lg">⚡</span>
            <span className="text-blue-600 font-semibold">Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Collaborators</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partnering with top innovators and teams to shape the future of gaming and technology.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        {/* Collaborators Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {collaborators.map((collaborator, index) => (
              <div
                key={collaborator.id}
                className="w-full flex-shrink-0 flex items-center justify-center px-4"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-200 hover:shadow-3xl hover:scale-105 transition-all duration-500 w-full max-w-lg mx-auto relative overflow-hidden group">
                  {/* Decorative background gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${collaborator.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Logo Section */}
                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${collaborator.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl">{collaborator.icon}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center h-32 mb-6 relative z-10">
                    <img
                      src={collaborator.logo}
                      alt={collaborator.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="text-center relative z-10">
                    <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${collaborator.gradient} bg-clip-text text-transparent`}>
                      {collaborator.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base mb-6">
                      {collaborator.description}
                    </p>
                    
                    {/* Decorative line */}
                    <div className={`h-1 w-20 mx-auto bg-gradient-to-r ${collaborator.gradient} rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {collaborators.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;

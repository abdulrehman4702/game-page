import React, { useState, useEffect } from "react";

const GamingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gameCards = [
    {
      id: 1,
      icon: "🏆",
      title: "Tournaments",
      description: "Compete globally",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-600/10",
      borderColor: "border-blue-500/20",
      shadowColor: "shadow-blue-500/10"
    },
    {
      id: 2,
      icon: "🌍",
      title: "Global Play",
      description: "Connect worldwide",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/20",
      shadowColor: "shadow-orange-500/10"
    },
    {
      id: 3,
      icon: "⚡",
      title: "Fast Gaming",
      description: "Lightning speed",
      gradient: "from-green-500 to-cyan-500",
      bgGradient: "from-green-500/10 to-cyan-500/10",
      borderColor: "border-green-500/20",
      shadowColor: "shadow-green-500/10"
    },
    {
      id: 4,
      icon: "🎯",
      title: "Precision",
      description: "Aim & conquer",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20",
      shadowColor: "shadow-purple-500/10"
    },
    {
      id: 5,
      icon: "🚀",
      title: "Innovation",
      description: "Next-gen tech",
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-500/20",
      shadowColor: "shadow-indigo-500/10"
    },
    {
      id: 6,
      icon: "🎮",
      title: "Multiplayer",
      description: "Play together",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-500/20",
      shadowColor: "shadow-emerald-500/10"
    }
  ];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % gameCards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + gameCards.length) % gameCards.length);
  };

  const goToCard = (index) => {
    setCurrentIndex(index);
  };

  // Pause auto-play on hover
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play carousel with pause on hover
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextCard, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div 
      className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Simple Slider Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${gameCards.length * 100}%`
        }}
      >
        {gameCards.map((card, index) => (
          <div
            key={card.id}
            className="w-full flex-shrink-0 flex items-center justify-center px-4"
          >
            <div 
              className={`w-[280px] h-[320px] sm:w-[320px] sm:h-[360px] lg:w-[350px] lg:h-[400px] bg-gradient-to-br ${card.bgGradient} rounded-2xl border-2 ${card.borderColor} shadow-lg ${card.shadowColor} cursor-pointer hover:shadow-xl transition-shadow duration-300`}
              onClick={() => goToCard(index)}
            >
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-center items-center text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${card.gradient} rounded-xl mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center text-white text-2xl sm:text-3xl`}>
                  {card.icon}
                </div>
                <h4 className="text-slate-800 font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">{card.title}</h4>
                <p className="text-slate-600 text-sm sm:text-base">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Navigation Controls */}
      <button 
        onClick={prevCard}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
      >
        <span className="text-slate-600 group-hover:text-blue-600 text-lg sm:text-xl transition-colors duration-300">←</span>
      </button>
      
      <button 
        onClick={nextCard}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group z-50"
      >
        <span className="text-slate-600 group-hover:text-blue-600 text-lg sm:text-xl transition-colors duration-300">→</span>
      </button>

      {/* Simple Counter */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-3 py-1 sm:px-4 sm:py-2 shadow-lg z-50">
        <span className="text-slate-600 font-semibold text-xs sm:text-sm">
          {currentIndex + 1} / {gameCards.length}
        </span>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-50">
        {gameCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GamingCarousel;

import { useEffect, useState } from "react";

const SpaceXLanding = () => {
  const [, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white overflow-hidden relative">
      {/* Background stars */}
      <div className="">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-700 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between lg:justify-around px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center">
          <div className="text-xl sm:text-2xl font-bold tracking-wider">
            SPACE<span className="text-orange-500">X</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-xs sm:text-sm">
          <a href="#" className="hover:text-orange-400 transition-colors">
            Главная
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Технологии
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            График полетов
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Гарантии
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            О компании
          </a>
          <a href="#" className="hover:text-orange-400 transition-colors">
            Контакты
          </a>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="flex flex-col space-y-4 px-4 py-6 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Главная
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Технологии
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              График полетов
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Гарантии
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              О компании
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-around px-4 sm:px-6 lg:px-8 pt-8 lg:pt-16 pb-8 lg:pb-0">
        {/* Left Side - Text */}
        <div
          className="flex-1 max-w-2xl flex flex-col justify-center text-center lg:text-left mb-8 lg:mb-0 relative z-0"
          style={{ minHeight: "32rem" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 lg:mb-4 bg-gradient-to-r from-white to-red-900 bg-clip-text text-transparent leading-tight">
            ПУТЕШЕСТВИЕ
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 text-gray-300">
            на красную планету
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="group border border-blue-400 text-blue-400 px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-72 hover:bg-blue-400 hover:text-black transition-all duration-300 relative overflow-hidden text-sm sm:text-base">
              <span className="relative z-10">Начать путешествие</span>
              <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="flex-1 max-w-sm w-full lg:max-w-sm relative z-20 mx-auto lg:mx-0">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Stat 1 */}
            <div className="group bg-black/40 lg:bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">мы</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="text-xs sm:text-sm text-gray-400">на рынке</div>
            </div>

            {/* Stat 2 */}
            <div className="group bg-black/40 lg:bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                гарантируем
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                50%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                безопасность
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group bg-black/40 lg:bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                календарик за
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
                2001 г.
              </div>
              <div className="text-xs sm:text-sm text-gray-400">в подарок</div>
            </div>

            {/* Stat 4 */}
            <div className="group bg-black/40 lg:bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-xs sm:text-sm text-gray-400 mb-1">
                путешествие
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                597
              </div>
              <div className="text-xs sm:text-sm text-gray-400">дней</div>
            </div>
          </div>
        </div>
      </div>

      {/* Center - Planet (positioned exactly as original for desktop, responsive for mobile) */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <img
          src="/moon.png"
          alt="Moon"
          draggable={false}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] sm:w-[100vw] md:w-[80vw] lg:max-w-[min(180vw,2000px)] lg:h-180 h-auto object-contain opacity-80 lg:opacity-100"
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 bg-red-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Cosmic rays */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-blue-500 via-transparent to-transparent transform rotate-45"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-orange-500 via-transparent to-transparent transform -rotate-12"></div>
      </div>

      {/* Scanning lines effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default SpaceXLanding;

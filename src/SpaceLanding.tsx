import { useEffect, useState } from "react";

const SpaceXLanding = () => {
  const [, setMounted] = useState(false);

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
      <nav className="relative z-50 flex items-center justify-around px-8 py-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold tracking-wider">
            SPACE<span className="text-orange-500">X</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 text-sm">
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

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-around px-8 pt-16">
        {/* Left Side - Text */}
        <div
          className="flex-1 max-w-2xl flex flex-col justify-center"
          style={{ minHeight: "32rem" }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-red-900 bg-clip-text text-transparent">
            ПУТЕШЕСТВИЕ
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300">
            на красную планету
          </p>

          <button className="group border border-blue-400 text-blue-400 px-8 py-3 w-72 hover:bg-blue-400 hover:text-black transition-all duration-300 relative overflow-hidden">
            <span className="relative z-10">Начать путешествие</span>
            <div className="absolute inset-0 bg-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Center - Planet */}

        <div className="fixed inset-0 pointer-events-none">
          <img
            src="/moon.png"
            alt="Moon"
            draggable={false}
            className="
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                max-w-[min(180vw,2000px)] h-180 object-contain
            "
          />
        </div>

        {/* Right Side - Stats Grid */}
        <div className="flex-1 max-w-sm">
          <div className="grid grid-cols-2 gap-4">
            {/* Stat 1 */}
            <div className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-sm text-gray-400 mb-1">мы</div>
              <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div className="text-sm text-gray-400">на рынке</div>
            </div>

            {/* Stat 2 */}
            <div className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-sm text-gray-400 mb-1">гарантируем</div>
              <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                50%
              </div>
              <div className="text-sm text-gray-400">безопасность</div>
            </div>

            {/* Stat 3 */}
            <div className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-sm text-gray-400 mb-1">календарик за</div>
              <div className="text-4xl font-bold text-orange-500 group-hover:scale-110 transition-transform duration-300">
                2001 г.
              </div>
              <div className="text-sm text-gray-400">в подарок</div>
            </div>

            {/* Stat 4 */}
            <div className="group bg-black/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:border-orange-500/30 cursor-pointer">
              <div className="text-sm text-gray-400 mb-1">путешествие</div>
              <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                597
              </div>
              <div className="text-sm text-gray-400">дней</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full animate-pulse"
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
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-bl from-blue-500 via-transparent to-transparent transform rotate-45"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
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

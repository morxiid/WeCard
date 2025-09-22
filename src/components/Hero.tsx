import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="h-20">
            <img 
              src="/logo white png.png" 
              alt="WeCard" 
              className="h-full w-auto object-contain"
            />
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </button>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#products" className="hover:text-purple-400 transition-colors">Products</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#dashboard" className="hover:text-purple-400 transition-colors">Dashboard</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
          </div>
          
          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full hover:scale-105 transition-transform">
            Get WeCard
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <span className="text-sm">NFC Technology</span>
              <Zap className="w-5 h-5 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Smarter Way to
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Share Your Business Card
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform networking with NFC-powered business cards. Instant profile updates, seamless connections, 
            and professional presentations that leave lasting impressions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Get Your WeCard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 rounded-full text-lg border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
        
        {/* Floating cards animation */}
        <div className="absolute -top-20 -left-20 opacity-20">
          <div className="w-32 h-20 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-lg backdrop-blur-sm animate-float"></div>
        </div>
        <div className="absolute -bottom-20 -right-20 opacity-20">
          <div className="w-32 h-20 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg backdrop-blur-sm animate-float delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
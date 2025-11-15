import React, { useState, useEffect } from 'react';
import { Smartphone, Wifi, User, Mail, Phone, Globe, Instagram, Linkedin, MapPin, Star } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const [isNearCard, setIsNearCard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const handleCardTap = () => {
    setIsNearCard(true);
    setAnimationStep(1);
    
    // Simulate NFC connection sequence
    setTimeout(() => setAnimationStep(2), 500);
    setTimeout(() => setAnimationStep(3), 1000);
    setTimeout(() => {
      setShowProfile(true);
      setAnimationStep(4);
    }, 1500);
  };

  const resetDemo = () => {
    setIsNearCard(false);
    setShowProfile(false);
    setAnimationStep(0);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Magic</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            See how WeCard transforms networking with a simple tap
          </p>
          <button 
            onClick={resetDemo}
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Reset Demo
          </button>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Demo Stage */}
          <div className="relative h-96 md:h-96 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            
            {/* WeCard */}
            <div 
              className={`relative md:absolute md:left-1/4 cursor-pointer transition-all duration-1000 ${
                isNearCard ? 'scale-110 rotate-12' : 'hover:scale-105'
              }`}
              onClick={handleCardTap}
            >
              <div className="relative w-40 h-24 md:w-64 md:h-40 perspective-1000 mb-2 md:mb-0 -mt-4 md:mt-0">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <img 
                      src="/Standard side1 png.png" 
                      alt="WeCard Front"
                      className="w-full h-full object-cover rounded-xl shadow-2xl"
                    />
                      
                      {/* NFC Animation Rings */}
                      {isNearCard && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="absolute w-16 h-16 md:w-20 md:h-20 border-2 border-blue-400 rounded-full animate-ping opacity-75"></div>
                          <div className="absolute w-24 h-24 md:w-32 md:h-32 border-2 border-purple-400 rounded-full animate-ping opacity-50 animation-delay-300"></div>
                          <div className="absolute w-32 h-32 md:w-44 md:h-44 border-2 border-cyan-400 rounded-full animate-ping opacity-25 animation-delay-600"></div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
              
              {!isNearCard && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center md:block hidden">
                  <div className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300 animate-pulse">
                    Tap to connect
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone */}
            <div 
              className={`relative md:absolute md:right-1/4 transition-all duration-1000 ${
                isNearCard ? 'scale-110 -rotate-12' : ''
              }`}
            >
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-40 h-64 md:w-48 md:h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700 -mt-2 md:mt-0">
                  <div className="w-full h-full bg-black rounded-2xl relative overflow-hidden">
                    
                    {/* Phone Screen - Default State */}
                    {!showProfile && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-gray-600 mx-auto mb-4" />
                          <div className="text-gray-400 text-xs md:text-sm px-2">
                            {animationStep === 0 && "Ready to connect"}
                            {animationStep === 1 && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span>Detecting NFC...</span>
                              </div>
                            )}
                            {animationStep === 2 && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Connected!</span>
                              </div>
                            )}
                            {animationStep === 3 && (
                              <div className="flex items-center space-x-2">
                                <div className="animate-spin w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                                <span>Loading profile...</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Phone Screen - Profile View */}
                    {showProfile && (
                      <div className="absolute inset-0 p-1 md:p-2 overflow-y-auto bg-white">
                        <div className={`transition-all duration-1000 ${showProfile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <div className="text-black p-2 h-full">
                            {/* Profile Header */}
                            <div className="text-center mb-3 bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-lg relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                              <div className="relative z-10">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-xl border-4 border-white">
                                  <span className="text-white font-bold text-2xl">M</span>
                                </div>
                                <h3 className="font-bold text-xl text-white mb-1">Morchiid</h3>
                                <p className="text-sm text-gray-200 mb-2">Creative Professional & Designer</p>
                                <p className="text-xs text-gray-300">Marrakesh, Morocco</p>
                              </div>
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-2 mb-4 px-1">
                              <div className="flex items-center space-x-3 text-xs bg-gray-50 p-3 rounded-lg shadow-sm">
                                <Mail className="w-4 h-4 text-purple-500" />
                                <span className="font-medium">info.wecard@gmail.com</span>
                              </div>
                              <div className="flex items-center space-x-3 text-xs bg-gray-50 p-3 rounded-lg shadow-sm">
                                <Phone className="w-4 h-4 text-blue-500" />
                                <span className="font-medium">+212 681 784 088</span>
                              </div>
                              <div className="flex items-center space-x-3 text-xs bg-gray-50 p-3 rounded-lg shadow-sm">
                                <Globe className="w-4 h-4 text-green-500" />
                                <span className="font-medium">wecard.ma</span>
                              </div>
                              <div className="flex items-center space-x-3 text-xs bg-gray-50 p-3 rounded-lg shadow-sm">
                                <MapPin className="w-4 h-4 text-red-500" />
                                <span className="font-medium">Marrakesh, Morocco</span>
                              </div>
                            </div>

                            {/* Services/Skills */}
                            <div className="mb-4 px-1">
                              <h4 className="font-semibold text-sm mb-2 text-gray-800">Services</h4>
                              <div className="flex flex-wrap gap-1">
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">NFC Cards</span>
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">Design</span>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Branding</span>
                              </div>
                            </div>

                            {/* Social Links */}
                            <div className="mb-4 px-1">
                              <h4 className="font-semibold text-sm mb-2 text-gray-800">Connect</h4>
                              <div className="flex justify-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                  <Instagram className="w-5 h-5 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                  <Linkedin className="w-5 h-5 text-white" />
                                </div>
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                  <Globe className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-2 mb-3 px-1">
                              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-3 rounded-lg text-xs font-semibold shadow-lg flex items-center justify-center space-x-1">
                                <User className="w-3 h-3" />
                                <span>Save Contact</span>
                              </button>
                              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 px-3 rounded-lg text-xs font-semibold shadow-lg flex items-center justify-center space-x-1">
                                <Phone className="w-3 h-3" />
                                <span>Call Now</span>
                              </button>
                            </div>

                            {/* Additional Actions */}
                            <div className="space-y-2 px-1">
                              <button className="w-full border border-purple-200 bg-purple-50 text-purple-700 py-2 rounded-lg text-xs font-medium shadow-sm flex items-center justify-center space-x-1">
                                <Globe className="w-3 h-3" />
                                <span>Visit Website</span>
                              </button>
                              <button className="w-full border border-blue-200 bg-blue-50 text-blue-700 py-2 rounded-lg text-xs font-medium shadow-sm flex items-center justify-center space-x-1">
                                <Star className="w-3 h-3" />
                                <span>Leave Review</span>
                              </button>
                            </div>

                            {/* Footer */}
                            <div className="text-center mt-3 pt-2 border-t border-gray-200">
                              <div className="flex items-center justify-center space-x-1">
                                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-sm"></div>
                                <span className="text-xs text-gray-500 font-medium">Powered by WeCard</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Line */}
                {isNearCard && (
                  <div className="hidden md:block absolute top-1/2 -left-32 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden md:block absolute top-10 left-10 opacity-30">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-float"></div>
            </div>
            <div className="hidden md:block absolute bottom-10 right-10 opacity-30">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-float delay-1000"></div>
            </div>
            <div className="hidden md:block absolute top-20 right-20 opacity-30">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-float delay-500"></div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-12">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Try the Demo!</h3>
              <p className="text-gray-300 text-sm px-4">
                Click on the WeCard to simulate an NFC tap and see the instant connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
                                <Linkedin className="w-4 h-4 text-white" />
                              </div>
                              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-md">
                                <Instagram className="w-4 h-4 text-white" />
                              </div>
                              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                                <Globe className="w-4 h-4 text-white" />
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-2 px-2">
                              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg text-xs font-semibold shadow-lg">
                                Save Contact
                              </button>
                              <button className="w-full border border-gray-300 py-2 rounded-lg text-xs bg-white shadow-md">
                                View Portfolio
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Line */}
                {isNearCard && (
                  <div className="hidden md:block absolute top-1/2 -left-32 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="hidden md:block absolute top-10 left-10 opacity-30">
              <div className="w-4 h-4 bg-purple-500 rounded-full animate-float"></div>
            </div>
            <div className="hidden md:block absolute bottom-10 right-10 opacity-30">
              <div className="w-6 h-6 bg-blue-500 rounded-full animate-float delay-1000"></div>
            </div>
            <div className="hidden md:block absolute top-20 right-20 opacity-30">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-float delay-500"></div>
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mt-12">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-2">Try the Demo!</h3>
              <p className="text-gray-300 text-sm px-4">
                Click on the WeCard to simulate an NFC tap and see the instant connection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
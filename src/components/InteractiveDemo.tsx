import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone } from 'lucide-react';

const InteractiveDemo: React.FC = () => {
  const { t } = useTranslation();
  const [isNearCard, setIsNearCard] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const handleCardTap = () => {
    if (showProfile) {
      // Reset the demo if profile is already showing
      setIsNearCard(false);
      setShowProfile(false);
      setAnimationStep(0);
    } else {
      // Start the demo sequence
      setIsNearCard(true);
      setAnimationStep(1);

      // Simulate NFC connection sequence
      setTimeout(() => setAnimationStep(2), 500);
      setTimeout(() => setAnimationStep(3), 1000);
      setTimeout(() => {
        setShowProfile(true);
        setAnimationStep(4);
      }, 1500);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('demo.title')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('demo.titleSpan')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            {t('demo.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Demo Stage */}
          <div className="relative h-96 md:h-96 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">

            {/* WeCard */}
            <div
              className={`relative md:absolute md:left-1/4 cursor-pointer transition-all duration-1000 ${isNearCard ? 'scale-110 rotate-12' : 'hover:scale-105'
                }`}
              onClick={handleCardTap}
            >
              <div className="relative w-40 h-24 md:w-64 md:h-40 perspective-1000 mb-2 md:mb-0 -mt-4 md:mt-0">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <img
                      src="/assets/Standard side1 png.png"
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
                    {showProfile ? t('demo.tapToReset') : t('demo.tapToConnect')}
                  </div>
                </div>
              )}
            </div>

            {/* Smartphone */}
            <div
              className={`relative md:absolute md:right-1/4 transition-all duration-1000 ${isNearCard ? 'scale-110 -rotate-12' : ''
                }`}
            >
              <div className="relative -mt-2 md:mt-0">
                {/* Phone Frame */}
                <div className="w-40 h-64 md:w-48 md:h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700">
                  <div className="w-full h-full bg-black rounded-2xl relative overflow-hidden">

                    {/* Phone Screen - Default State */}
                    {!showProfile && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-gray-600 mx-auto mb-4" />
                          <div className="text-gray-400 text-xs md:text-sm px-2">
                            {animationStep === 0 && t('demo.ready')}
                            {animationStep === 1 && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span>{t('demo.detecting')}</span>
                              </div>
                            )}
                            {animationStep === 2 && (
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>{t('demo.connected')}</span>
                              </div>
                            )}
                            {animationStep === 3 && (
                              <div className="flex items-center space-x-2">
                                <div className="animate-spin w-4 h-4 border-2 border-purple-400 border-t-transparent rounded-full"></div>
                                <span>{t('demo.loading')}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Phone Screen - Profile View */}
                    {showProfile && (
                      <div className="absolute inset-0 overflow-hidden bg-white">
                        <div className={`h-full w-full transition-all duration-1000 ${showProfile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <img
                            src="/assets/real-profile-screenshot.png"
                            alt="Real WeCard Profile"
                            className="w-full h-full object-cover"
                          />
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
              <h3 className="text-xl font-bold mb-2">{t('demo.tryIt')}</h3>
              <p className="text-gray-300 text-sm px-4">
                {showProfile
                  ? t('demo.resetDesc')
                  : t('demo.tapDesc')
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
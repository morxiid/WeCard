import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Smartphone, UserCheck, RotateCcw } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the animation of steps
          setTimeout(() => setVisibleSteps(prev => [true, prev[1], prev[2]]), 200);
          setTimeout(() => setVisibleSteps(prev => [prev[0], true, prev[2]]), 600);
          setTimeout(() => setVisibleSteps(prev => [prev[0], prev[1], true]), 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description'),
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description'),
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('howItWorks.title')} <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t('howItWorks.titleSpan')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${visibleSteps[index]
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
                }`}
            >
              {/* Step number and icon */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full opacity-20 animate-pulse`}></div>
                  <div className={`absolute inset-2 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white`}>
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden md:block relative -mt-8 mb-8">
          <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

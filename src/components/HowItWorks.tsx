import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, UserCheck, RotateCcw } from 'lucide-react';

const HowItWorks: React.FC = () => {
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
      title: "Tap to Connect",
      description: "Simply tap your WeCard against any smartphone. No apps needed - NFC technology does the rest instantly.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Profile Opens Instantly",
      description: "Your complete profile appears instantly with contact info, services, social media, and portfolio links.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Update Anytime",
      description: "Change your information anytime from our dashboard. No reprints needed - your card updates automatically.",
      color: "from-cyan-500 to-purple-500"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">WeCard Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to revolutionize how you share your professional information
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                visibleSteps[index] 
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

        {/* Demo mockup */}
        <div className="text-center mt-16">
        <div className="relative w-full max-w-3xl aspect-video mx-auto">
          <iframe
            src="https://youtu.be/pX_TaoV6azw?list=RDpX_TaoV6azw"
            title="WeCard Demo Video"
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React, { useState, useEffect, useRef } from 'react';
import { 
  Radio, 
  Settings, 
  Link, 
  Leaf, 
  Shield, 
  Zap, 
  BarChart3, 
  Globe,
  CheckCircle 
} from 'lucide-react';

const Features: React.FC = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>(new Array(8).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger the animation of features
          visibleFeatures.forEach((_, index) => {
            setTimeout(() => {
              setVisibleFeatures(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Radio className="w-6 h-6" />,
      title: "NFC Technology",
      description: "Advanced Near Field Communication for instant connections with any smartphone",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Profile Management",
      description: "Update your information anytime with our intuitive dashboard interface",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Link All Services",
      description: "Connect all your social media, websites, and professional platforms in one place",
      color: "from-cyan-500 to-purple-500"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Reduce paper waste with digital cards that update without reprinting",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your data is encrypted and you control what information to share",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Updates",
      description: "Changes reflect immediately across all your distributed cards",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track engagement and see how people interact with your card",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Compatibility",
      description: "Works with all NFC-enabled smartphones worldwide, no apps required",
      color: "from-cyan-500 to-green-500"
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to make lasting professional connections in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                visibleFeatures[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`}></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Check mark animation */}
                  <div className="mt-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Networking?</h3>
            <p className="text-gray-300 mb-6">Join thousands of professionals who've upgraded their business cards</p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
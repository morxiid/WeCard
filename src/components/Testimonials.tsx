import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: i18n.language === 'fr' ? "Directrice Marketing" : "Marketing Director",
      company: "TechFlow Inc.",
      content: i18n.language === 'fr'
        ? "WeCard a transformé notre networking. La connexion instantanée fait toute la différence lors des conférences."
        : "WeCard completely transformed how we network at conferences. The instant connection and professional presentation made a huge difference in lead generation.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: i18n.language === 'fr' ? "Agent Immobilier" : "Real Estate Agent",
      company: "Premium Properties",
      content: i18n.language === 'fr'
        ? "La Google Review Card change tout ! Mes clients laissent des avis en un clic, ma réputation s'envole."
        : "The Google Review Card is a game-changer! My clients can leave reviews instantly, and my online reputation has improved dramatically.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: i18n.language === 'fr' ? "Designer Freelance" : "Freelance Designer",
      company: "Creative Studios",
      content: i18n.language === 'fr'
        ? "J'adore mettre à jour mes liens instantanément. Plus besoin de cartes papier dépassées."
        : "I love how I can update my portfolio links instantly. No more carrying outdated business cards - WeCard keeps everything current automatically.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Park",
      role: i18n.language === 'fr' ? "Responsable Ventes" : "Sales Manager",
      company: "Global Solutions",
      content: i18n.language === 'fr'
        ? "Les analyses m'aident à suivre mes meilleurs contacts. C'est un véritable outil CRM portable."
        : "The analytics feature helps me track which connections are most engaged. It's like having a CRM system built into my business card.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.title')} <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t('testimonials.titleSpan')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Main testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400/50">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-purple-400">{testimonials[currentTestimonial].role}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500'
                  : 'bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              7,500+
            </div>
            <div className="text-gray-300">{t('testimonials.statCards')}</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-300">{t('testimonials.statSatisfaction')}</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              1M+
            </div>
            <div className="text-gray-300">{t('testimonials.statViews')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
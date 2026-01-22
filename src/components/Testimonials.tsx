import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Amine Belkhayat",
      role: i18n.language === 'fr' ? "Fondateur, Tech-Innov" : "Founder, Tech-Innov",
      company: "Casablanca",
      content: i18n.language === 'fr'
        ? "WeCard a révolutionné ma façon de networker à Casablanca. Plus besoin de transporter des piles de cartes, un simple tap suffit."
        : "WeCard has revolutionized the way I network in Casablanca. No more carrying stacks of paper cards, a simple tap is all it takes.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Laila Mansouri",
      role: i18n.language === 'fr' ? "Consultante en Stratégie" : "Strategy Consultant",
      company: "Rabat",
      content: i18n.language === 'fr'
        ? "L'élégance de la carte noire WeCard fait toujours sensation lors de mes rendez-vous d'affaires. C'est un véritable atout professionnel."
        : "The elegance of the black WeCard always makes an impression during my business meetings. It's a real professional asset.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Youssef Benjelloun",
      role: i18n.language === 'fr' ? "Directeur de Restaurant" : "Restaurant Manager",
      company: "Marrakech",
      content: i18n.language === 'fr'
        ? "La Google Review Card nous a aidés à doubler nos avis positifs en moins d'un mois. Incontournable pour tout commerce au Maroc."
        : "The Google Review Card helped us double our positive reviews in less than a month. Essential for any business in Morocco.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Med El Morchid",
      role: i18n.language === 'fr' ? "Entrepreneur" : "Entrepreneur",
      company: "Marrakesh",
      content: i18n.language === 'fr'
        ? "Mes clients adorent la facilité du transfert de contact. C'est l'image de modernité que je veux projeter pour mon agence."
        : "My clients love how easy it is to transfer contact info. It's the modern image I want to project for my agency.",
      rating: 5,
      avatar: "https://scontent.frak2-1.fna.fbcdn.net/v/t39.30808-1/329329389_932333334846559_6898754381580771340_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGPczmUEpr-0Yh7r67sFqH60A0vIDeUCcXQDS8gN5QJxVq5LVoIO_drmv0KcG3e0ZEVdqxPPIHdqu3YyQ4SkvEK&_nc_ohc=mC9qOqEfSZwQ7kNvwG6apeY&_nc_oc=AdlvhYjTt6e2nl99AmziLh-hxuPkQGaghqhLTbVNBhI6W3kCWlBibEfMTKbU01xev6Y&_nc_zt=24&_nc_ht=scontent.frak2-1.fna&_nc_gid=s-Hp-F7bNZmCQkm-_W2lJA&oh=00_Afp3vGq4e8GkX1tVV96_9WmlDjVvk3W4JxC3SAfxLqxnbA&oe=6975D974"
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
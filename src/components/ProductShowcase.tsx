import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ArrowRight, Palette, Award, MessageSquare, Check } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Spotlight effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "WeCard Professional",
      price: "349 MAD",
      description: i18n.language === 'fr'
        ? "Cartes sur mesure avec votre image de marque. L'idéal pour se démarquer professionnellement."
        : "Custom-designed cards with your branding. Perfect for professionals who want to stand out.",
      features: i18n.language === 'fr'
        ? ["Design Unique", "Votre Image", "Profil Avancé", "Tableau de Bord"]
        : ["Custom Design", "Your Branding", "Advanced Profile", "Analytics Dashboard"],
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGlow: "group-hover:border-cyan-500/50",
      popular: false,
      frontImage: "/assets/wecardPro-1-2.png",
      backImage: "/assets/wecardPro-1-2.png",
      order: "https://wa.me/p/23912719188420118/212681784088"
    },
    {
      id: 2,
      name: "WeCard Standard",
      price: "249 MAD",
      description: i18n.language === 'fr'
        ? "L'essentiel du NFC pour particuliers et PME. Élégant, simple et efficace."
        : "Perfect for individuals and small businesses. Features the WeCard logo and essential NFC functionality.",
      features: i18n.language === 'fr'
        ? ["Puce NFC", "Design Épuré", "Branding WeCard", "Liens Sociaux"]
        : ["NFC Technology", "Affordable and sleek", "WeCard Branding", "Social Links"],
      icon: <Star className="w-6 h-6" />,
      gradient: "from-purple-500/20 to-blue-500/20",
      borderGlow: "group-hover:border-purple-500/50",
      popular: true,
      frontImage: "/assets/wecardStandard-Front.png",
      backImage: "/assets/wecardStandard-Back.png",
      order: "https://wa.me/p/24352358697728014/212681784088"
    },
    {
      id: 3,
      name: "Google Review Card",
      price: "159 MAD",
      description: i18n.language === 'fr'
        ? "Boostez vos avis Google. Un lien direct pour vos clients, simple et rapide."
        : "Specifically designed to collect Google reviews. Direct link for clients to leave feedback instantly.",
      features: i18n.language === 'fr'
        ? ["Accès Direct Google", "Boost d'Avis", "Secours QR Code", "Suivi du Succès"]
        : ["Direct Google Link", "Review Optimization", "QR Code Backup", "Success Tracking"],
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-amber-500/20 to-orange-500/20",
      borderGlow: "group-hover:border-amber-500/50",
      popular: false,
      frontImage: "/assets/GoogleReview-Front.png",
      backImage: "/assets/GoogleReview-Back.png",
      order: "https://wa.me/p/24199588673006757/212681784088"
    }
  ];

  return (
    <section id="products" className="py-24 px-6 relative overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-black"></div>

      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] animate-float"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            {t('products.title')} <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">WeCard</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {products.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`group relative rounded-3xl transition-all duration-500 ${product.popular ? 'md:-mt-8 md:mb-8 z-20 scale-105 shadow-2xl shadow-purple-900/20' : 'hover:translate-y-[-10px]'
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Spotlight Background for the Card */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
                  }}
                />

                {/* Border Gradient & Glow */}
                <div className={`absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/5 ${product.borderGlow} transition-colors duration-500`}></div>

                {/* Card Content */}
                <div className={`relative h-full bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col overflow-hidden border border-white/5`}>

                  {/* Popular Badge */}
                  {product.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-bl from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{i18n.language === 'fr' ? 'POPULAIRE' : 'POPULAR'}</span>
                      </div>
                    </div>
                  )}

                  {/* Card Flip Showcase */}
                  <div className="mb-8 flex justify-center perspective-1000 group-hover:scale-105 transition-transform duration-500">
                    <div className="relative w-64 h-40">
                      <div className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${hoveredCard === index ? 'rotate-y-180' : ''}`}>
                        {/* Front */}
                        <div className="absolute inset-0 w-full h-full backface-hidden shadow-2xl shadow-black/50 rounded-xl">
                          <img
                            src={product.frontImage}
                            alt="Front"
                            className="w-full h-full object-cover rounded-xl border border-white/10"
                          />
                          {/* Glare effect */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
                        </div>

                        {/* Back */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 shadow-2xl shadow-black/50 rounded-xl">
                          <img
                            src={product.backImage}
                            alt="Back"
                            className="w-full h-full object-cover rounded-xl border border-white/10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${product.gradient} ring-1 ring-white/10`}>
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                        {product.price}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">{t('products.perCard')}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed font-light">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                        <div className={`w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover/feature:bg-green-500/20 transition-colors`}>
                          <Check className="w-3 h-3 text-gray-400 group-hover/feature:text-green-400 transition-colors" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={product.order}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-auto"
                  >
                    <button className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 relative group/btn overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} opacity-20 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                      <span className="relative z-10 text-white group-hover/btn:text-white transition-colors">{t('products.orderNow')}</span>
                      <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

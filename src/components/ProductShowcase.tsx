import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ArrowRight, Palette, Award, MessageSquare } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      gradient: "from-blue-500/20 to-cyan-500/20",
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
      gradient: "from-cyan-500/20 to-purple-500/20",
      popular: false,
      frontImage: "/assets/GoogleReview-Front.png",
      backImage: "/assets/GoogleReview-Back.png",
      order: "https://wa.me/p/24199588673006757/212681784088"
    }
  ];

  return (
    <section id="products" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('products.title')} <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">WeCard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative group cursor-pointer transition-all duration-500 ${hoveredCard === index ? 'scale-105' : ''
                }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{i18n.language === 'fr' ? 'Le plus populaire' : 'Most Popular'}</span>
                  </div>
                </div>
              )}

              {/* Card Container */}
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${product.gradient} backdrop-blur-sm h-full`}>
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>

                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* WeCard Mockup with Flip Animation */}
                  <div className="mb-8 flex justify-center">
                    <div className="relative w-64 h-40 perspective-1000">
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${hoveredCard === index ? 'rotate-y-180' : ''
                        }`}>
                        {/* Front of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden">
                          <img
                            src={product.frontImage}
                            alt="WeCard Front"
                            className="w-full h-full object-cover rounded-xl shadow-2xl"
                          />
                        </div>

                        {/* Back of card */}
                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                          <img
                            src={product.backImage}
                            alt="WeCard Back"
                            className="w-full h-full object-cover rounded-xl shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                      {product.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{product.price}</div>
                      <div className="text-sm text-gray-400">{t('products.perCard')}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">{product.description}</p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={product.order}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${product.gradient} block`}>
                    <button className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500 hover:to-blue-500 border border-white/20 rounded-full py-3 font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group/btn">
                      <span>{t('products.orderNow')}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

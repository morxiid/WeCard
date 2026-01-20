import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Menu, X, Globe, Smartphone, ShieldCheck, Zap, Instagram, Linkedin, Facebook, BarChart3, UserPlus } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-down').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.howItWorks'), href: '#how-it-works' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.dashboard'), href: 'https://e-card.space/', external: true },
    { name: t('nav.faq'), href: '#faq' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),transparent_50%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-float delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="relative z-[110]">
              <img
                src="/assets/logo white png.png"
                alt="WeCard"
                className={`transition-all duration-300 object-contain ${isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32'}`}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher />
            <a href="#order" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
              {t('nav.getWeCard')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4 relative z-[110]">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[100] lg:hidden transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
          }`}>
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-bold transition-all duration-300 delay-[${i * 100}ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-10 py-4 rounded-full text-xl font-bold"
          >
            {t('nav.getWeCard')}
          </a>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="text-left">
            <div className="reveal-down inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-300 tracking-wider uppercase">{t('hero.badge')}</span>
            </div>

            <h1 className="reveal-down text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight transition-all duration-500">
              <span className="block">{t('hero.titlePart1')}</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {t('hero.titlePart2')}
              </span>
            </h1>

            <p className="reveal-down text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="reveal-down flex flex-col sm:flex-row gap-5 mb-16">
              <a
                href="#order"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                <div className="absolute inset-0 shimmer opacity-50"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <span>{t('hero.ctaPrimary')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              <button className="flex items-center justify-center space-x-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-md group text-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="font-semibold">{t('hero.ctaSecondary')}</span>
              </button>
            </div>

            {/* Trust Bar (Social Proof) */}
            <div className="reveal-down border-t border-white/10 pt-10">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">{i18n.language === 'fr' ? 'COMPATIBLE AVEC' : 'COMPATIBLE WITH'}</p>
              <div className="flex flex-wrap gap-8 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center space-x-2 hover:opacity-100"><Globe size={20} /> <span className="text-sm font-semibold">Any Browser</span></div>
                <div className="flex items-center space-x-2 hover:opacity-100"><Smartphone size={20} /> <span className="text-sm font-semibold">iOS & Android</span></div>
                <div className="flex items-center space-x-2 hover:opacity-100"><ShieldCheck size={20} /> <span className="text-sm font-semibold">NFC Security</span></div>
                <div className="flex items-center space-x-2 hover:opacity-100"><Zap size={20} /> <span className="text-sm font-semibold">Zero Delay</span></div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative flex justify-center items-center">
            <div className="reveal-down relative w-full max-w-[500px] aspect-square animate-float">
              {/* Visual Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-[80px]"></div>

              {/* 3D Card Simulation */}
              <div className="relative z-10 w-full h-full perspective-1000 rotate-12 hover:rotate-0 transition-all duration-700">
                <div className="w-full h-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-sm group cursor-pointer">
                  <img
                    src="/assets/Standard side1 png.png"
                    alt="WeCard Premium"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating badges around the card */}
                {/* Social Badges */}
                <div className="absolute -top-10 -right-10 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 animate-float delay-300 group/badge cursor-pointer hover:bg-white/10 transition-colors">
                  <Instagram className="text-pink-500 w-8 h-8 group-hover/badge:scale-110 transition-transform" />
                </div>
                <div className="absolute top-[10%] -left-16 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 animate-float delay-1000 group/badge cursor-pointer hover:bg-white/10 transition-colors">
                  <Linkedin className="text-blue-500 w-8 h-8 group-hover/badge:scale-110 transition-transform" />
                </div>

                {/* Analytics Feature Badge */}
                <div className="absolute bottom-[20%] -right-20 p-5 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/20 animate-float delay-700 shadow-2xl flex items-center gap-4 group/ana z-20">
                  <div className="p-3 bg-green-500/20 rounded-xl group-hover/ana:bg-green-500/30 transition-colors">
                    <BarChart3 className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{i18n.language === 'fr' ? 'VUES TOTALES' : 'TOTAL VIEWS'}</div>
                    <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">1,284</div>
                  </div>
                  <div className="h-8 w-12 flex items-end gap-1 pb-1">
                    <div className="w-1 h-3 bg-green-500/40 rounded-full animate-pulse"></div>
                    <div className="w-1 h-5 bg-green-500/60 rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-4 bg-green-500/50 rounded-full animate-pulse delay-150"></div>
                    <div className="w-1 h-6 bg-green-500/80 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>

                {/* Contact Save Feature Badge */}
                <div className="absolute -bottom-8 -left-8 p-5 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/20 animate-float delay-500 shadow-2xl flex items-center gap-4 z-20 group/save overflow-hidden">
                  <div className="absolute inset-0 shimmer opacity-10"></div>
                  <div className="p-3 bg-purple-500/20 rounded-xl group-hover/save:scale-110 transition-transform">
                    <UserPlus className="text-purple-400 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{i18n.language === 'fr' ? 'Ajouter Contact' : 'Save Contact'}</div>
                    <div className="text-[10px] text-purple-400 font-medium">Auto-Sync Feature</div>
                  </div>
                </div>

                {/* Integration Badge */}
                <div className="absolute top-[60%] -left-12 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 animate-float delay-1500 opacity-60">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
                  </div>
                </div>

                <div className="absolute -bottom-12 right-1/4 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 animate-float delay-600">
                  <Facebook className="text-blue-600 w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, BarChart3, Settings, Users, Zap, Shield, Globe } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="dashboard" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('dashboard.title')} <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{t('dashboard.titleSpan')}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('dashboard.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Features and Explanations */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex-shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('dashboard.analytics.title')}</h3>
                  <p className="text-gray-300">{t('dashboard.analytics.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('dashboard.management.title')}</h3>
                  <p className="text-gray-300">{t('dashboard.management.desc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('dashboard.organization.title')}</h3>
                  <p className="text-gray-300">{t('dashboard.organization.desc')}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">{t('dashboard.stats.updates')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">{t('dashboard.stats.secure')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">{t('dashboard.stats.global')}</div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <a href="https://e-card.space/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 w-full h-full">
                <span>{t('dashboard.cta')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </button>
          </div>

          {/* Right Side - Ecosystem Mockup */}
          <div className="relative group cursor-pointer" onClick={() => window.open('https://e-card.space/morchiid', '_blank')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-50"></div>
              <img
                src="/assets/phone_laptop_mockup.png"
                alt="WeCard Ecosystem Mockup"
                className="relative z-10 w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Overlay Stats/features to make it more "active" */}
            <div className="absolute -bottom-8 -right-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 hidden md:block animate-float">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">{t('testimonials.statViews')}</div>
                  <div className="text-lg font-bold">{t('dashboard.stats_values.views')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

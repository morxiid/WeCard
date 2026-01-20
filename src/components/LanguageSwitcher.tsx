import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 bg-white/5 hover:bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-all duration-500 text-xs font-bold tracking-widest group"
            title={i18n.language === 'en' ? 'Passer au Français' : 'Switch to English'}
        >
            <Globe className="w-4 h-4 text-purple-400 group-hover:rotate-180 transition-transform duration-700" />
            <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                {i18n.language.toUpperCase() === 'EN' ? 'FR' : 'EN'}
            </span>
        </button>
    );
};

export default LanguageSwitcher;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, Truck, UserCheck } from 'lucide-react';

const OrderingProcess: React.FC = () => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: t('ordering.step1.title'),
            description: t('ordering.step1.desc'),
            color: "from-purple-500 to-blue-500"
        },
        {
            icon: <CreditCard className="w-8 h-8" />,
            title: t('ordering.step2.title'),
            description: t('ordering.step2.desc'),
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: t('ordering.step3.title'),
            description: t('ordering.step3.desc'),
            color: "from-cyan-500 to-purple-500"
        }
    ];

    return (
        <section id="ordering-process" className="py-20 px-6 relative bg-black/50">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('ordering.title')} <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t('ordering.titleSpan')}</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('ordering.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                            <div className="mb-6">
                                <div className="w-16 h-16 mx-auto relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full opacity-20 animate-pulse`}></div>
                                    <div className={`absolute inset-2 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white`}>
                                        {step.icon}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                            <p className="text-gray-400 text-center leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OrderingProcess;

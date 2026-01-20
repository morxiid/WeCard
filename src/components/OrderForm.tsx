import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const OrderForm: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'whatsapp' | 'form'>('whatsapp');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        type: 'Professional',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    React.useEffect(() => {
        emailjs.init('5P__VUDI3Ze-Q4AJ2');
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            console.log('Sending EmailJS with:', {
                service: 'service_utuz9ja',
                template: 'template_bvkhs3a',
                params: formData
            });

            const result = await emailjs.send(
                'service_utuz9ja',
                'template_bvkhs3a',
                {
                    from_name: formData.name,
                    to_name: 'WeCard Team',
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    type: formData.type,
                    message: formData.message
                },
                '5P__VUDI3Ze-Q4AJ2'
            );

            console.log('EmailJS Success Status:', result.status, result.text);
            setSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                type: 'Professional',
                message: ''
            });
        } catch (err: any) {
            console.error('EmailJS Error Object:', err);
            const errorMsg = err?.text || err?.message || 'Failed to send';
            setError(`${t('order.error')} (${errorMsg})`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsAppClick = () => {
        const message = `Hello WeCard, I would like to order a card.`;
        window.open(`https://wa.me/212681784088?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="order" className="py-20 px-6 relative bg-gradient-to-b from-black to-purple-900/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t('order.title')}</h2>
                    <p className="text-gray-300">{t('order.subtitle')}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm">
                    {/* Tabs */}
                    <div className="flex border-b border-white/10">
                        <button
                            onClick={() => setActiveTab('whatsapp')}
                            className={`flex-1 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === 'whatsapp' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <MessageCircle className="w-5 h-5 text-green-500" />
                            {t('order.tabWhatsapp')}
                        </button>
                        <button
                            onClick={() => setActiveTab('form')}
                            className={`flex-1 py-4 text-center font-semibold transition-colors flex items-center justify-center gap-2 ${activeTab === 'form' ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <Send className="w-5 h-5 text-blue-500" />
                            {t('order.tabForm')}
                        </button>
                    </div>

                    <div className="p-8 md:p-12">
                        {activeTab === 'whatsapp' ? (
                            <div className="text-center py-8">
                                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MessageCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{t('order.whatsappTitle')}</h3>
                                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                    {t('order.whatsappDesc')}
                                </p>
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    {t('order.whatsappBtn')}
                                </button>
                            </div>
                        ) : (
                            <div>
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                                        <h3 className="text-2xl font-bold mb-4">{t('order.successTitle')}</h3>
                                        <p className="text-gray-300">
                                            {t('order.successDesc', { name: formData.name })}
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-purple-400 hover:text-purple-300"
                                        >
                                            {t('order.anotherOrder')}
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">{t('order.labelName')}</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                    placeholder={t('order.placeholderName')}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300">{t('order.labelPhone')}</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                    placeholder={t('order.placeholderPhone')}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">{t('order.labelEmail')}</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder={t('order.placeholderEmail')}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">{t('order.labelType')}</label>
                                            <select
                                                name="type"
                                                value={formData.type}
                                                onChange={handleInputChange}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                            >
                                                <option value="Professional">{t('order.optionPro')}</option>
                                                <option value="Personnel">{t('order.optionStd')}</option>
                                                <option value="Google">{t('order.optionGoogle')}</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-300">{t('order.labelNotes')}</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                                                placeholder={t('order.placeholderNotes')}
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-400 text-sm text-center">{error}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>{t('order.sending') || 'Sending...'}</span>
                                                </>
                                            ) : (
                                                t('order.submitBtn')
                                            )}
                                        </button>

                                        <p className="text-xs text-center text-gray-500 mt-4">
                                            {t('order.disclaimer')}
                                        </p>
                                    </form>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;

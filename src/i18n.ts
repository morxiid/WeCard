import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                products: 'Products',
                howItWorks: 'How It Works',
                features: 'Features',
                dashboard: 'Dashboard',
                faq: 'FAQ',
                getWeCard: 'Get WeCard'
            },
            hero: {
                badge: 'NFC Technology',
                titlePart1: 'The Smarter Way to',
                titlePart2: 'Share Your Business Card',
                description: 'Transform networking with NFC-powered business cards. Instant profile updates, seamless connections, and professional presentations that leave lasting impressions.',
                ctaPrimary: 'Get Your WeCard',
                ctaSecondary: 'Watch Demo'
            },
            products: {
                title: 'Choose Your',
                subtitle: 'From personal networking to business growth, we have the perfect NFC solution for every need.',
                orderNow: 'Order Now',
                perCard: 'per card',
                mostPopular: 'Most Popular'
            },
            howItWorks: {
                title: 'How',
                titleSpan: 'WeCard Works',
                subtitle: 'Three simple steps to revolutionize how you share your professional information',
                step1: {
                    title: "Tap to Connect",
                    description: "Simply tap your WeCard against any smartphone. No apps needed - NFC technology does the rest instantly."
                },
                step2: {
                    title: "Profile Opens Instantly",
                    description: "Your complete profile appears instantly with contact info, services, social media, and portfolio links."
                },
                step3: {
                    title: "Update Anytime",
                    description: "Change your information anytime from our dashboard. No reprints needed - your card updates automatically."
                }
            },
            ordering: {
                title: 'Simple',
                titleSpan: 'Ordering Process',
                subtitle: 'Get your WeCard in 3 easy steps',
                step1: {
                    title: '1. Create Profile / Order',
                    desc: 'Choose your card type and submit your details via form or WhatsApp.'
                },
                step2: {
                    title: '2. Payment (100dh)',
                    desc: 'Secure your order with a 100dh advance payment to our account.'
                },
                step3: {
                    title: '3. Receive & Network',
                    desc: 'We deliver your custom NFC card. Start networking immediately by tapping.'
                }
            },
            dashboard: {
                title: 'Complete',
                titleSpan: 'Ecosystem',
                subtitle: 'Experience the full power of WeCard. From our sleek physical cards to our advanced analytics dashboard, we provide everything you need to manage your professional identity.',
                analytics: {
                    title: 'Real-Time Analytics',
                    desc: 'Track profile views, engagement rates, and connection success. See which content performs best and optimize your networking strategy.'
                },
                management: {
                    title: 'Easy Profile Management',
                    desc: 'Update your information, links, and media instantly. Changes reflect immediately across all your distributed cards.'
                },
                organization: {
                    title: 'Contact Organization',
                    desc: 'Organize and export your growing network. Keep track of connections and follow up with potential clients.'
                },
                stats: {
                    updates: 'Instant Updates',
                    secure: 'Secure & Private',
                    global: 'Global Access'
                },
                stats_values: {
                    cards: '7,500+',
                    satisfaction: '98%',
                    views: '1M+'
                },
                cta: 'Explore Full Dashboard'
            },
            footer: {
                ctaTitle: 'Ready to Upgrade Your',
                ctaTitleSpan: 'Business Card?',
                ctaSubtitle: "Join thousands of professionals who've revolutionized their networking with WeCard's NFC technology",
                orderBtn: 'Order Your WeCard',
                scheduleBtn: 'Schedule Demo',
                emailPlaceholder: 'Enter your email for updates',
                brandDesc: 'Revolutionizing professional networking with smart NFC business cards that connect instantly and update seamlessly.',
                products: 'Products',
                company: 'Company',
                contact: 'Contact',
                allRights: 'All rights reserved.'
            },
            faq: {
                title: 'Frequently Asked',
                titleSpan: 'Questions',
                subtitle: 'Everything you need to know about WeCard and NFC technology',
                stillQuestions: 'Still have questions?',
                supportDesc: 'Our support team is here to help you get started',
                contactSupport: 'Contact Support'
            },
            demo: {
                title: 'Experience the',
                titleSpan: 'Magic',
                subtitle: 'See how WeCard transforms networking with a simple tap',
                tapToReset: 'Tap to reset',
                tapToConnect: 'Tap to connect',
                ready: 'Ready to connect',
                detecting: 'Detecting NFC...',
                connected: 'Connected!',
                loading: 'Loading profile...',
                tryIt: 'Try the Demo!',
                resetDesc: 'Tap the WeCard again to reset the demo',
                tapDesc: 'Tap the WeCard to simulate an NFC connection'
            },
            features_sec: {
                title: 'Powerful',
                titleSpan: 'Features',
                subtitle: 'Everything you need to make lasting professional connections in the digital age',
                available: 'Available',
                ctaTitle: 'Ready to Transform Your Networking?',
                ctaSubtitle: "Join thousands of professionals who've upgraded their business cards",
                ctaBtn: 'Get Started Today',
                items: {
                    nfcTitle: "NFC Technology",
                    nfcDesc: "Advanced NFC for instant connections with any smartphone",
                    mgmtTitle: "Easy Profile Management",
                    mgmtDesc: "Update your info anytime with our intuitive dashboard",
                    linkTitle: "Link All Services",
                    linkDesc: "Connect all your social and professional platforms in one place",
                    ecoTitle: "Eco-Friendly",
                    ecoDesc: "Reduce waste with digital cards that update without reprinting",
                    secureTitle: "Secure & Private",
                    secureDesc: "Your data is encrypted and you control what to share",
                    instantTitle: "Instant Updates",
                    instantDesc: "Changes reflect immediately across all your cards",
                    analyticsTitle: "Analytics Dashboard",
                    analyticsDesc: "Track engagement and interact with your card statistics",
                    globalTitle: "Global Compatibility",
                    globalDesc: "Works with all NFC smartphones worldwide, no apps required"
                }
            },
            testimonials: {
                title: 'What Our',
                titleSpan: 'Clients Say',
                subtitle: 'Join thousands of professionals who have revolutionized their networking',
                statCards: 'Cards Distributed',
                statSatisfaction: 'Satisfaction',
                statViews: 'Profile Views'
            },
            order: {
                title: 'Start Your Journey',
                subtitle: "Choose how you'd like to order your WeCard",
                tabWhatsapp: 'Quick Order (WhatsApp)',
                tabForm: 'Order Form',
                whatsappTitle: 'Chat with us on WhatsApp',
                whatsappDesc: 'The fastest way to get your card. Chat directly with our team, customize your order, and confirm instantly.',
                whatsappBtn: 'Open WhatsApp Chat',
                successTitle: 'Order Received!',
                successDesc: 'Thank you for your order, {{name}}. We will contact you shortly.',
                anotherOrder: 'Submit another order',
                labelName: 'Full Name',
                labelPhone: 'Phone Number',
                labelEmail: 'Email Address',
                labelType: 'Card Type',
                labelNotes: 'Additional Notes',
                placeholderName: 'John Doe',
                placeholderPhone: '+212...',
                placeholderEmail: 'john@example.com',
                placeholderNotes: 'Any specific requirements?',
                submitBtn: 'Submit Order Request',
                sending: 'Sending...',
                error: 'Failed to send order. Please try again.',
                disclaimer: '* Payment details will be sent after confirmation.',
                optionPro: 'Professional (Black Matte)',
                optionStd: 'Standard (Custom Design)',
                optionGoogle: 'Google Review Card'
            }
        }
    },
    fr: {
        translation: {
            nav: {
                products: 'Produits',
                howItWorks: 'Fonctionnement',
                features: 'Points Forts',
                dashboard: 'Dashboard',
                faq: 'FAQ',
                getWeCard: 'Acheter WeCard'
            },
            hero: {
                badge: 'Technologie NFC',
                titlePart1: 'La Solution Idéale pour',
                titlePart2: 'Partager Votre Carte',
                description: 'Simplifiez votre réseautage avec le NFC. Profil instantané, liens fluides et image professionnelle garantie.',
                ctaPrimary: 'Obtenez Votre WeCard',
                ctaSecondary: 'Voir la Démo'
            },
            products: {
                title: 'Choisissez Votre',
                subtitle: 'Des solutions NFC adaptées à tous vos besoins professionnels.',
                orderNow: 'Commander',
                perCard: 'par carte',
                mostPopular: 'Le plus populaire'
            },
            howItWorks: {
                title: 'Comment ça',
                titleSpan: 'Marche',
                subtitle: 'Partagez vos infos en trois étapes simples.',
                step1: {
                    title: "Touchez pour Partager",
                    description: "Approchez votre WeCard d'un smartphone. Le NFC fait le reste, sans application."
                },
                step2: {
                    title: "Profil Instantané",
                    description: "Votre profil complet s'affiche avec vos coordonnées et réseaux sociaux."
                },
                step3: {
                    title: "Mise à Jour Facile",
                    description: "Modifiez vos infos via le dashboard. Mise à jour instantanée sur votre carte."
                }
            },
            ordering: {
                title: 'Processus de',
                titleSpan: 'Commande',
                subtitle: 'Votre WeCard en 3 étapes simples',
                step1: {
                    title: '1. Profil & Commande',
                    desc: 'Choisissez votre carte et envoyez vos infos par formulaire ou WhatsApp.'
                },
                step2: {
                    title: '2. Paiement (100dh)',
                    desc: 'Validez votre commande avec une avance de 100dh.'
                },
                step3: {
                    title: '3. Livraison & Réseau',
                    desc: 'Recevez votre carte NFC personnalisée et commencez à networker dès maintenant !'
                }
            },
            dashboard: {
                title: 'Écosystème',
                titleSpan: 'Complet',
                subtitle: 'Gérez votre identité professionnelle avec nos outils d\'analyse et nos cartes élégantes.',
                analytics: {
                    title: 'Analyses en Temps Réel',
                    desc: 'Suivez vos vues et l\'engagement pour optimiser votre stratégie de réseautage.'
                },
                management: {
                    title: 'Gestion de Profil Simple',
                    desc: 'Mettez à jour vos liens instantanément. Changements immédiats sur vos cartes.'
                },
                organization: {
                    title: 'Réseau Organisé',
                    desc: 'Gérez votre réseau et relancez vos prospects en toute simplicité.'
                },
                stats: {
                    updates: 'Directes',
                    secure: 'Sécurisé',
                    global: 'Mondial'
                },
                stats_values: {
                    cards: '7,500+',
                    satisfaction: '98%',
                    views: '1M+'
                },
                cta: 'Accéder au Dashboard'
            },
            footer: {
                ctaTitle: 'Passez au Futur de la',
                ctaTitleSpan: 'Carte de Visite',
                ctaSubtitle: "Rejoignez les professionnels qui font confiance à la technologie NFC de WeCard.",
                orderBtn: 'Commandez Votre WeCard',
                scheduleBtn: 'Planifier une Démo',
                emailPlaceholder: 'Votre email pour les nouveautés',
                brandDesc: 'Réinventez le réseautage avec des cartes de visite NFC intelligentes et connectées.',
                products: 'Produits',
                company: 'Société',
                contact: 'Contact',
                allRights: 'Tous droits réservés.'
            },
            faq: {
                title: 'Questions',
                titleSpan: 'Fréquentes',
                subtitle: 'Tout ce que vous devez savoir sur WeCard et le NFC',
                stillQuestions: 'D\'autres questions ?',
                supportDesc: 'Notre équipe est là pour vous aider à démarrer.',
                contactSupport: 'Contacter le Support'
            },
            demo: {
                title: 'Découvrez la',
                titleSpan: 'Magie',
                subtitle: 'Voyez comment WeCard transforme le réseautage d\'un geste.',
                tapToReset: 'Reset',
                tapToConnect: 'Connecter',
                ready: 'Prêt à connecter',
                detecting: 'Détection NFC...',
                connected: 'Connecté !',
                loading: 'Chargement...',
                tryIt: 'Essayez la Démo !',
                resetDesc: 'Touchez la carte pour réinitialiser',
                tapDesc: 'Touchez la carte pour simuler une connexion'
            },
            features_sec: {
                title: 'Fonctions',
                titleSpan: 'Puissantes',
                subtitle: 'Tout pour réussir votre réseautage à l\'ère du numérique.',
                available: 'Inclus',
                ctaTitle: 'Prêt à transformer votre carrière ?',
                ctaSubtitle: "Rejoignez des milliers de pros qui ont adopté WeCard.",
                ctaBtn: 'Démarrer',
                items: {
                    nfcTitle: "Technologie NFC",
                    nfcDesc: "Connexions instantanées avec tout smartphone.",
                    mgmtTitle: "Gestion Simple",
                    mgmtDesc: "Mise à jour via notre interface intuitive.",
                    linkTitle: "Multi-Canaux",
                    linkDesc: "Regroupez réseaux sociaux et liens pro au même endroit.",
                    ecoTitle: "Éco-Responsable",
                    ecoDesc: "Zéro gaspillage de papier avec nos cartes durables.",
                    secureTitle: "Sécurisé & Privé",
                    secureDesc: "Données cryptées et contrôle total de vos partages.",
                    instantTitle: "Instantané",
                    instantDesc: "Changements répercutés immédiatement sur vos cartes.",
                    analyticsTitle: "Dashboard d'Analyse",
                    analyticsDesc: "Suivez l'engagement et les interactions en temps réel.",
                    globalTitle: "Compatibilité",
                    globalDesc: "Compatible avec tout smartphone NFC, sans application."
                }
            },
            testimonials: {
                title: 'Avis',
                titleSpan: 'Clients',
                subtitle: 'Rejoignez des milliers de professionnels déjà conquis.',
                statCards: 'Cartes livrées',
                statSatisfaction: 'Satisfaction',
                statViews: 'Vues Profil'
            },
            order: {
                title: 'Prêt à démarrer ?',
                subtitle: "Choisissez votre mode de commande",
                tabWhatsapp: 'WhatsApp Rapide',
                tabForm: 'Formulaire',
                whatsappTitle: 'Échangez sur WhatsApp',
                whatsappDesc: 'Moyen le plus rapide. Discutez avec nous, personnalisez et validez en direct.',
                whatsappBtn: 'Lancer la discussion',
                successTitle: 'Commande Reçue !',
                successDesc: 'Merci, {{name}}. Nous vous contacterons sous peu.',
                anotherOrder: 'Autre commande',
                labelName: 'Nom complet',
                labelPhone: 'Téléphone',
                labelEmail: 'E-mail',
                labelType: 'Type de carte',
                labelNotes: 'Notes libres',
                placeholderName: 'Votre nom',
                placeholderPhone: '+212...',
                placeholderEmail: 'votre@email.com',
                placeholderNotes: 'Vos besoins spécifiques ?',
                submitBtn: 'Envoyer la commande',
                sending: 'Envoi en cours...',
                error: 'Échec de l\'envoi. Veuillez réessayer.',
                disclaimer: '* Paiement après confirmation de la commande.',
                optionPro: 'Professionnel',
                optionStd: 'Standard',
                optionGoogle: 'Google Review'
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

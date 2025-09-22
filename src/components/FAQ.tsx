import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does NFC technology work with WeCard?",
      answer: "NFC (Near Field Communication) allows your WeCard to instantly connect with any NFC-enabled smartphone when tapped. No apps are required - the phone automatically opens your profile page with all your information, links, and contact details."
    },
    {
      question: "Can I update my information after receiving my WeCard?",
      answer: "Absolutely! That's one of the key benefits of WeCard. You can update your information anytime through our online dashboard, and the changes are reflected immediately. No need to reprint cards or worry about outdated information."
    },
    {
      question: "Do people need to download an app to view my profile?",
      answer: "No app required! When someone taps your WeCard with their smartphone, it automatically opens their default web browser to display your profile. This works with both iPhone and Android devices."
    },
    {
      question: "What's the difference between Personnel and Professional cards?",
      answer: "WeCard Personnel features our standard design with the WeCard logo, perfect for individuals and small businesses. WeCard Professional allows complete customization with your own branding, colors, and design elements."
    },
    {
      question: "How does the Google Review Card work?",
      answer: "The Google Review Card is specifically designed to collect customer reviews. When tapped, it takes customers directly to your Google Business review page, making it incredibly easy for them to leave positive feedback about your business."
    },
    {
      question: "Is my data secure with WeCard?",
      answer: "Yes, security is our top priority. All data is encrypted, and you have complete control over what information to share. You can update privacy settings and choose which details are visible to different audiences."
    },
    {
      question: "How long do WeCards last?",
      answer: "WeCards are built to last for years with normal use. The NFC chip is durable and waterproof, and the card material is designed to withstand daily handling without wear or damage."
    },
    {
      question: "Can I track how many people viewed my profile?",
      answer: "Yes! Professional and Google Review cards come with analytics dashboard access where you can see profile views, engagement metrics, and track the effectiveness of your networking efforts."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about WeCard and NFC technology
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-500 ease-in-out ${
                openFAQ === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact support */}
        <div className="text-center mt-12">
          <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-gray-300 mb-4">Our support team is here to help you get started</p>
            <button className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/50 px-6 py-2 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
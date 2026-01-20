import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import OrderingProcess from './components/OrderingProcess';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
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

    const observeElements = () => {
      document.querySelectorAll('.reveal-down:not(.visible)').forEach(el => observer.observe(el));
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      <Hero />
      <div className="reveal-down"><ProductShowcase /></div>
      <div className="reveal-down"><InteractiveDemo /></div>
      <div className="reveal-down"><HowItWorks /></div>
      <div className="reveal-down"><Features /></div>
      <div className="reveal-down"><Dashboard /></div>
      <div className="reveal-down"><OrderingProcess /></div>
      <div className="reveal-down"><Testimonials /></div>
      <div className="reveal-down"><OrderForm /></div>
      <div className="reveal-down"><FAQ /></div>
      <Footer />
    </div>
  );
}

export default App;
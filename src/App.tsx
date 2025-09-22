import React from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <InteractiveDemo />
      <HowItWorks />
      <Features />
      <Dashboard />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
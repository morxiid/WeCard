import React, { useState } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Target
} from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* Background with blur effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Upgrade Your
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Business Card?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who've revolutionized their networking with WeCard's NFC technology
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                  <span>Order Your WeCard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-8 py-4 rounded-full text-lg border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>

              {/* Email signup */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for updates"
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm focus:outline-none focus:border-purple-400 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="h-16 md:h-20 mb-4">
  <img 
    src="/logo white png.png" 
    alt="WeCard" 
    className="h-full w-auto"
  />
</div>

            <p className="text-gray-300 mb-6">
              Revolutionizing professional networking with smart NFC business cards that connect instantly and update seamlessly.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/wecarrd/" },
                { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/morchiid" },
                { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/profile.php?id=61563561612821" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">WeCard Personnel</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">WeCard Professional</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Google Review Card</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info.wecard@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+212 681 784 088</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Marrakesh, Morocco</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 WeCard. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
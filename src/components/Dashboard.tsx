import React from 'react';
import { ArrowRight, BarChart3, Settings, Users, Zap, Shield, Globe } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <section id="dashboard" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Manage your WeCard profile, track engagement, and analyze your networking success with our comprehensive dashboard
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
                  <h3 className="text-xl font-bold mb-2">Real-Time Analytics</h3>
                  <p className="text-gray-300">Track profile views, engagement rates, and connection success. See which content performs best and optimize your networking strategy.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0">
                  <Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Easy Profile Management</h3>
                  <p className="text-gray-300">Update your information, links, and media instantly. Changes reflect immediately across all your distributed cards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
                <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Contact Organization</h3>
                  <p className="text-gray-300">Organize and export your growing network. Keep track of connections and follow up with potential clients.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Instant Updates</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Secure & Private</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10">
                <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Global Access</div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <a href="https://e-card.space/">
              <span>Explore Full Dashboard</span>
                </a>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Dashboard Screenshots Placeholder */}
          <div className="relative">
            <div className="space-y-8">
              {/* Desktop Dashboard Placeholder */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4">
                  <div className="bg-gray-800 rounded-t-2xl p-2">
                    <div className="bg-black rounded-xl aspect-video flex items-center justify-center border border-gray-700 relative overflow-hidden">
                      {/* Placeholder for desktop dashboard screenshot */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                      <div className="relative z-10 text-center p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                          <BarChart3 className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Desktop Dashboard</h4>
                        <p className="text-gray-400 text-sm">Replace with actual screenshot</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 h-6 rounded-b-2xl relative">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-t-lg"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Dashboard Placeholder */}
              <div className="flex justify-center">
                <div className="relative max-w-xs">
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl border border-gray-700">
                    <div className="bg-black rounded-2xl aspect-[9/16] flex items-center justify-center relative overflow-hidden">
                      {/* Placeholder for mobile dashboard screenshot */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"></div>
                      <div className="relative z-10 text-center p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
                          <Settings className="w-6 h-6" />
                        </div>
                        <h4 className="text-sm font-semibold mb-2">Mobile Dashboard</h4>
                        <p className="text-gray-400 text-xs">Replace with actual screenshot</p>
                      </div>
                    </div>
                  </div>
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
import React from 'react';
import avatar from './assets/avt.jpg';
import { ProfileCard } from './components/ProfileCard';
import { InfoCard } from './components/InfoCard';
import { TechnicalSkills } from './components/TechnicalSkills';
import { SocialCard } from './components/SocialCard';
import { Categories } from './components/Categories';
import { Achievements } from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Profile & Info */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard
              name="Anh Duy"
              title="Information Security"
              avatar={avatar}
              description="Eat for life"
            />
            <InfoCard />
          </div>

          {/* Middle Column - Technical Skills & Social */}
          <div className="lg:col-span-2 space-y-6">
            <TechnicalSkills />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <SocialCard />
              </div>
              <div>
                <Categories />
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="lg:col-span-1">
            <Achievements />
          </div>
        </div>
        {/* Labs Section */}
      <section id="labs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Laboratory</h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Explore my experimental projects and learning journey through hands-on labs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Lab 1 */}
            <div className="group">
              <a 
                href="https://github.com/DuyShiba/lab/tree/main/day_2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                      <Beaker className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Lab 1</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:transform group-hover:translate-x-1 transition-all duration-200" />
                </div>
                <p className="text-white/70 mb-4">Day 2 - Exploring fundamental concepts and practical implementations</p>
                <div className="flex items-center text-sm text-white/60">
                  <Code className="w-4 h-4 mr-2" />
                  <span>Experimental Project</span>
                </div>
              </a>
            </div>

            {/* Placeholder for future labs */}
            <div className="group">
              <div className="block bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 opacity-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mr-4">
                      <Beaker className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Lab 2</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/50 mb-4">Coming soon - More exciting experiments ahead</p>
                <div className="flex items-center text-sm text-white/40">
                  <Code className="w-4 h-4 mr-2" />
                  <span>In Development</span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="block bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 opacity-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center mr-4">
                      <Beaker className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">Lab 3</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/50 mb-4">Coming soon - More exciting experiments ahead</p>
                <div className="flex items-center text-sm text-white/40">
                  <Code className="w-4 h-4 mr-2" />
                  <span>In Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Currently available for projects</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

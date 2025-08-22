import React from 'react';
import { BookOpen, ExternalLink, Code2, Terminal, Shield, Database, Network, Lock, Bug, Search, FileText, Cpu, Globe, Zap, Key } from 'lucide-react';

interface Lab {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  icon: React.ComponentType<any>;
  link: string;
  color: string;
}

export const Labs: React.FC = () => {
  const labs: Lab[] = [
    {
      id: 1,
      title: 'Lab 1',
      description: '',
      difficulty: 'Beginner',
      category: 'Web',
      icon: Network,
      link: 'https://laba-71p8.onrender.com',
      color: 'text-blue-400 bg-blue-400/10'
    },
    {
      id: 2,
      title: 'Lab 2',
      description: '',
      difficulty: 'Beginner',
      category: 'Web',
      icon: Database,
      link: 'https://example.com/lab2',
      color: 'text-green-400 bg-green-400/10'
    },
    {
      id: 3,
      title: 'Lab 3',
      description: '',
      difficulty: 'Intermediate',
      category: 'Web',
      icon: Lock,
      link: 'https://example.com/lab3',
      color: 'text-purple-400 bg-purple-400/10'
    },
    {
      id: 4,
      title: 'Lab 4',
      description: '',
      difficulty: 'Advanced',
      category: 'Web',
      icon: Bug,
      link: 'https://example.com/lab4',
      color: 'text-red-400 bg-red-400/10'
    },
    {
      id: 5,
      title: 'Lab 5',
      description: '',
      difficulty: 'Intermediate',
      category: 'Web',
      icon: Search,
      link: 'https://example.com/lab5',
      color: 'text-yellow-400 bg-yellow-400/10'
    },
    {
      id: 6,
      title: 'Lab 6',
      description: '',
      difficulty: 'Advanced',
      category: 'Web',
      icon: Shield,
      link: 'https://example.com/lab6',
      color: 'text-orange-400 bg-orange-400/10'
    },
    {
      id: 7,
      title: 'Lab 7',
      description: 'Comprehensive web application security testing',
      difficulty: 'Intermediate',
      category: 'Web',
      icon: Globe,
      link: 'https://example.com/lab7',
      color: 'text-cyan-400 bg-cyan-400/10'
    },
    {
      id: 8,
      title: 'Reverse Engineering Basics',
      description: 'Introduction to reverse engineering with IDA Pro',
      difficulty: 'Advanced',
      category: 'Reverse Engineering',
      icon: Code2,
      link: 'https://example.com/lab8',
      color: 'text-indigo-400 bg-indigo-400/10'
    },
    {
      id: 9,
      title: 'Linux System Administration',
      description: 'Essential Linux commands and system security',
      difficulty: 'Beginner',
      category: 'System Administration',
      icon: Terminal,
      link: 'https://example.com/lab9',
      color: 'text-emerald-400 bg-emerald-400/10'
    },
    {
      id: 10,
      title: 'Incident Response Simulation',
      description: 'Handle a simulated security incident from detection to recovery',
      difficulty: 'Advanced',
      category: 'Incident Response',
      icon: Zap,
      link: 'https://example.com/lab10',
      color: 'text-pink-400 bg-pink-400/10'
    },
    {
      id: 11,
      title: 'Password Cracking Techniques',
      description: 'Learn various password attack methods and defenses',
      difficulty: 'Intermediate',
      category: 'Password Security',
      icon: Key,
      link: 'https://example.com/lab11',
      color: 'text-violet-400 bg-violet-400/10'
    },
    {
      id: 12,
      title: 'Memory Forensics Analysis',
      description: 'Analyze system memory dumps using Volatility',
      difficulty: 'Advanced',
      category: 'Digital Forensics',
      icon: Cpu,
      link: 'https://example.com/lab12',
      color: 'text-rose-400 bg-rose-400/10'
    },
    {
      id: 13,
      title: 'Social Engineering Awareness',
      description: 'Understanding social engineering tactics and prevention',
      difficulty: 'Beginner',
      category: 'Social Engineering',
      icon: FileText,
      link: 'https://example.com/lab13',
      color: 'text-teal-400 bg-teal-400/10'
    },
    {
      id: 14,
      title: 'Advanced Persistent Threats',
      description: 'Analyze APT attack patterns and detection methods',
      difficulty: 'Advanced',
      category: 'Threat Intelligence',
      icon: Shield,
      link: 'https://example.com/lab14',
      color: 'text-amber-400 bg-amber-400/10'
    },
    {
      id: 15,
      title: 'Cloud Security Assessment',
      description: 'Security assessment of cloud infrastructure and services',
      difficulty: 'Intermediate',
      category: 'Cloud Security',
      icon: Globe,
      link: 'https://example.com/lab15',
      color: 'text-sky-400 bg-sky-400/10'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/20';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleLabClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
        <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
        Security Labs
        <span className="ml-2 text-sm text-gray-400 font-normal">({labs.length} Labs Available)</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {labs.map((lab) => (
          <div
            key={lab.id}
            onClick={() => handleLabClick(lab.link)}
            className="group relative bg-gray-700/50 rounded-lg p-4 border border-gray-600 hover:border-gray-500 hover:bg-gray-700/70 transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            {/* Lab Number Badge */}
            <div className="absolute top-2 right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold text-gray-300">
              {lab.id}
            </div>

            {/* Icon and Title */}
            <div className="flex items-start space-x-3 mb-3">
              <div className={`p-2 rounded-lg ${lab.color} group-hover:scale-110 transition-transform duration-200`}>
                <lab.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {lab.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                  {lab.description}
                </p>
              </div>
            </div>

            {/* Category and Difficulty */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500 font-medium truncate">
                {lab.category}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(lab.difficulty)}`}>
                {lab.difficulty}
              </span>
            </div>

            {/* External Link Icon */}
            <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>Click on any lab to start practicing</span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs">Beginner</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-xs">Intermediate</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <span className="text-xs">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
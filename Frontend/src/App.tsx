import React from 'react';
import { Calendar, Zap, Target, BarChart3, CheckCircle, ArrowRight, Sparkles, Clock, Users, TrendingUp, Star, Shield, Brain, Lightbulb, Compass, Heart, Coffee, Rocket, Globe, Award, Zap as Lightning } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Unique Header with Google Colors */}
      <header className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0">
          <div className="h-full w-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #4285f4 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #ea4335 2px, transparent 2px),
                radial-gradient(circle at 25% 75%, #fbbc04 2px, transparent 2px),
                radial-gradient(circle at 75% 25%, #34a853 2px, transparent 2px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-full p-0.5 animate-neural-pulse">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-medium text-gray-900">The Nudge</h1>
                <p className="text-sm text-gray-600">Intelligent Calendar Companion</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
                <a href="#insights" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Insights</a>
                <a href="#integration" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Integration</a>
              </nav>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium ripple-neural">
                Try The Nudge
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Geometric Patterns */}
      <section className="relative overflow-hidden py-24">
        {/* Complex Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-8">
            <div className="h-full w-full" style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(66, 133, 244, 0.1) 40%, rgba(66, 133, 244, 0.1) 60%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(234, 67, 53, 0.1) 40%, rgba(234, 67, 53, 0.1) 60%, transparent 60%),
                linear-gradient(90deg, transparent 40%, rgba(251, 188, 4, 0.1) 40%, rgba(251, 188, 4, 0.1) 60%, transparent 60%),
                linear-gradient(0deg, transparent 40%, rgba(52, 168, 83, 0.1) 40%, rgba(52, 168, 83, 0.1) 60%, transparent 60%)
              `,
              backgroundSize: '80px 80px, 80px 80px, 60px 60px, 60px 60px'
            }}></div>
          </div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-blue-200 rounded-full animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-red-100 transform rotate-45 animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-yellow-100 rounded-full animate-pulse"></div>
          <div className="absolute top-60 right-1/3 w-16 h-16 bg-green-100 transform rotate-12 animate-wiggle"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <Lightbulb className="h-4 w-4 text-blue-600 animate-neural-pulse" />
              <span className="text-blue-800 font-medium text-sm">Gentle AI Guidance</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Your Calendar's
            <br />
            <span className="font-medium text-neural-gradient">
              Gentle Nudge
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The Nudge doesn't force changes—it gently guides you toward better time management. 
            Subtle AI suggestions that respect your preferences while optimizing your productivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 ripple-neural">
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all">
              See How It Works
            </button>
          </div>

          {/* Unique Stats Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-blue-50 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-blue-100 text-center elevation-neural-2">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Feel Less Stressed</div>
              </div>
            </div>
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-red-50 rounded-2xl transform -rotate-2"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-red-100 text-center elevation-neural-2">
                <div className="text-3xl font-bold text-red-600 mb-2">500K+</div>
                <div className="text-sm text-gray-600">Nudged Users</div>
              </div>
            </div>
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-yellow-50 rounded-2xl transform rotate-1"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-yellow-100 text-center elevation-neural-2">
                <div className="text-3xl font-bold text-yellow-600 mb-2">3.2hrs</div>
                <div className="text-sm text-gray-600">Daily Time Saved</div>
              </div>
            </div>
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-green-50 rounded-2xl transform -rotate-1"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-green-100 text-center elevation-neural-2">
                <div className="text-3xl font-bold text-green-600 mb-2">4.8★</div>
                <div className="text-sm text-gray-600">Happiness Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features with Unique Layout */}
      <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pattern-neural-dots"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">
              Intelligent Nudging
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every suggestion designed to gently guide you toward better habits and productivity.
            </p>
          </div>

          {/* Asymmetric Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Feature Card */}
            <div className="md:col-span-8 relative group hover-lift">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
              <div className="relative bg-white p-8 rounded-3xl border border-blue-100 h-full elevation-neural-3">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-100 p-4 rounded-2xl animate-neural-pulse">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">Behavioral Intelligence</h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      The Nudge learns your patterns and gently suggests improvements without being intrusive. 
                      It's like having a thoughtful assistant who knows exactly when to help.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-700">Gentle reminders</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-700">Habit formation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-700">Stress reduction</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-700">Flow state protection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Feature Cards */}
            <div className="md:col-span-4 space-y-8">
              <div className="relative group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform"></div>
                <div className="relative bg-white p-6 rounded-2xl border border-red-100 elevation-neural-2">
                  <div className="bg-red-100 p-3 rounded-xl w-fit mb-4">
                    <Compass className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Smart Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    Contextual suggestions that appear at the perfect moment to guide better decisions.
                  </p>
                </div>
              </div>

              <div className="relative group hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                <div className="relative bg-white p-6 rounded-2xl border border-green-100 elevation-neural-2">
                  <div className="bg-green-100 p-3 rounded-xl w-fit mb-4">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Wellness Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Prioritizes your mental health and work-life balance with thoughtful suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-white relative">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-3 pattern-hexagonal"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light text-gray-900 mb-4">
              Experience The Nudge
            </h2>
            <p className="text-xl text-gray-600">
              See how gentle AI guidance transforms your daily workflow
            </p>
          </div>

          <div className="relative">
            {/* Mock Calendar Interface */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden elevation-neural-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Brain className="h-6 w-6 text-white animate-neural-pulse" />
                  <h3 className="text-white font-medium">The Nudge Dashboard</h3>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Gently Active</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="text-center">
                      <div className="text-sm font-medium text-gray-600 mb-2">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all hover-lift ${
                        index === 2 ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}>
                        {15 + index}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl border-l-4 border-blue-600 hover-lift">
                    <div className="flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-blue-600 animate-neural-pulse" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Morning Focus Block</h4>
                      <p className="text-sm text-gray-600">9:00 AM - 11:00 AM • Nudge: Your peak energy time</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      Suggested
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl border-l-4 border-green-600 hover-lift">
                    <div className="flex-shrink-0">
                      <Coffee className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Mindful Break</h4>
                      <p className="text-sm text-gray-600">11:15 AM - 11:30 AM • Nudge: Time to recharge</p>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Wellness
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-2xl border-l-4 border-yellow-600 hover-lift">
                    <div className="flex-shrink-0">
                      <Users className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">Team Sync</h4>
                      <p className="text-sm text-gray-600">2:00 PM - 2:30 PM • Nudge: Shorter meetings work better</p>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-light text-white mb-6">
            Ready for Better Days?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands who've discovered the gentle power of The Nudge. 
            Transform your relationship with time, one small suggestion at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg ripple-neural">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Ultra-Unique Footer */}
      <footer className="relative bg-gray-900 text-white overflow-hidden">
        {/* Complex Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5 pattern-neural-waves"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 border-2 border-blue-500/20 rounded-full animate-orbit"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-red-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-yellow-500/10 transform rotate-45 animate-breathe"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Brand Section - Spans 4 columns */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-full p-0.5 animate-neural-pulse">
                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-medium">The Nudge</h3>
                  <p className="text-sm text-gray-400">Intelligent Calendar Companion</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming productivity through gentle AI guidance. 
                We believe the best changes happen gradually, with thoughtful nudges 
                that respect your autonomy while optimizing your potential.
              </p>

              {/* Unique Social Links */}
              <div className="flex space-x-4 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover-lift cursor-pointer group">
                  <Globe className="h-5 w-5 group-hover:animate-spin" />
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover-lift cursor-pointer group">
                  <Heart className="h-5 w-5 group-hover:animate-pulse" />
                </div>
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center hover-lift cursor-pointer group">
                  <Lightning className="h-5 w-5 group-hover:animate-bounce" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover-lift cursor-pointer group">
                  <Rocket className="h-5 w-5 group-hover:animate-wiggle" />
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4 text-blue-500" />
                  <span>Privacy First</span>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-2">
              <h4 className="font-medium mb-6 text-blue-400 flex items-center space-x-2">
                <Compass className="h-4 w-4" />
                <span>Product</span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">API Access</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Enterprise</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-medium mb-6 text-red-400 flex items-center space-x-2">
                <Lightbulb className="h-4 w-4" />
                <span>Resources</span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Webinars</a></li>
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="font-medium mb-6 text-yellow-400 flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Company</span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Press Kit</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Investors</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-2">
              <h4 className="font-medium mb-6 text-green-400 flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>Stay Updated</span>
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Get gentle nudges about new features and productivity tips.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 ripple-neural">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Unique Stats Bar */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group hover-lift">
                <div className="text-2xl font-bold text-blue-400 mb-1 group-hover:animate-pulse">500K+</div>
                <div className="text-xs text-gray-500">Happy Users</div>
              </div>
              <div className="group hover-lift">
                <div className="text-2xl font-bold text-red-400 mb-1 group-hover:animate-pulse">1.2M+</div>
                <div className="text-xs text-gray-500">Nudges Delivered</div>
              </div>
              <div className="group hover-lift">
                <div className="text-2xl font-bold text-yellow-400 mb-1 group-hover:animate-pulse">98.5%</div>
                <div className="text-xs text-gray-500">Satisfaction Rate</div>
              </div>
              <div className="group hover-lift">
                <div className="text-2xl font-bold text-green-400 mb-1 group-hover:animate-pulse">24/7</div>
                <div className="text-xs text-gray-500">AI Support</div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 The Nudge. Crafted with care for better productivity.
              </p>
              <div className="flex space-x-1">
                <div className="loading-neural"></div>
                <div className="loading-neural"></div>
                <div className="loading-neural"></div>
                <div className="loading-neural"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Settings</a>
              </div>
              
              {/* Unique Status Indicator */}
              <div className="flex items-center space-x-2 bg-gray-800 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { motion } from "motion/react";
import { Rocket, Shield, Zap, Globe, Github, Twitter, Mail } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">Styn Love</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <button className="px-5 py-2.5 bg-white text-black rounded-full hover:bg-gray-200 transition-all font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Now Live on Cyberpanel
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
                Launch your next big idea <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                  with confidence.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Styn Love provides the ultimate infrastructure for your applications. 
                Optimized for Cyberpanel, built for speed, and secured by default.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 group">
                  Deploy Now
                  <Zap className="w-5 h-5 group-hover:fill-current transition-all" />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold text-lg transition-all">
                  View Demo
                </button>
              </div>
            </motion.div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-32">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-yellow-400" />,
                  title: "Lightning Fast",
                  desc: "Optimized server-side rendering and global CDN distribution for sub-second load times."
                },
                {
                  icon: <Shield className="w-6 h-6 text-green-400" />,
                  title: "Secure by Default",
                  desc: "Automatic SSL, DDoS protection, and isolated environments for every deployment."
                },
                {
                  icon: <Globe className="w-6 h-6 text-blue-400" />,
                  title: "Global Scale",
                  desc: "Deploy to multiple regions with a single click. Scale from zero to millions effortlessly."
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 opacity-50">
            <Rocket className="w-5 h-5" />
            <span className="text-sm font-semibold tracking-tight">Styn Love &copy; 2026</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
          
          <div className="flex items-center gap-8 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

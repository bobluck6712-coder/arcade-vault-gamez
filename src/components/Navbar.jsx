import { motion } from 'motion/react';
import { Gamepad2, Search, Zap } from 'lucide-react';

export default function Navbar({ onSearchChange, searchQuery }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.reload()}>
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">ARCADE <span className="text-brand">VAULT</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">Trending</a>
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">Categories</a>
          <a href="#" className="text-sm font-medium hover:text-brand transition-colors">New</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search games..." 
              className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-brand/50 transition-colors w-40 md:w-64"
            />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-4 py-2 rounded-xl"
          >
            <Gamepad2 className="w-4 h-4" />
            <span className="hidden lg:inline">PLAY NOW</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

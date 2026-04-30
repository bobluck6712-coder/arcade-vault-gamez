import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function GameCard({ game, onSelect }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(game)}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-surface border border-white/5 group-hover:border-brand/30 transition-colors">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-14 h-14 bg-brand rounded-full flex items-center justify-center shadow-2xl shadow-brand/40">
            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
            {game.category}
          </span>
        </div>
      </div>
      
      <div className="mt-4 px-2">
        <h3 className="font-display font-bold text-lg leading-tight group-hover:text-brand transition-colors">{game.title}</h3>
        <p className="text-white/40 text-xs mt-1 line-clamp-1">{game.description}</p>
      </div>
    </motion.div>
  );
}

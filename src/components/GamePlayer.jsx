import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, RotateCcw, Share2 } from 'lucide-react';

export default function GamePlayer({ game, onClose }) {
  if (!game) return null;

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div>
              <h2 className="font-display font-bold text-xl">{game.title}</h2>
              <p className="text-white/40 text-xs uppercase tracking-widest">{game.category}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.location.reload()}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              title="Restart Game"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button 
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleFullscreen}
              className="w-10 h-10 rounded-xl bg-brand hover:bg-brand/80 flex items-center justify-center transition-colors ml-2"
              title="Fullscreen"
            >
              <Maximize2 className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Game Container */}
        <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full h-full max-w-5xl mx-auto p-4 md:p-8"
          >
            <iframe 
              src={game.iframeUrl} 
              className="w-full h-full rounded-2xl border-none shadow-2xl shadow-brand/20 bg-white"
              title={game.title}
              allow="autoplay; fullscreen; pointer-lock; encrypted-media; clipboard-write"
              allowFullScreen
            />
          </motion.div>
        </div>
        
        {/* Footer info */}
        <div className="px-8 py-6 max-w-5xl mx-auto w-full">
           <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="font-display font-bold text-lg mb-2">About the game</h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {game.description} This version is provided for unblocked arcade entertainment. Enjoy high-performance web gaming directly in your browser.
                </p>
              </div>
              <div className="flex gap-4">
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex-1 md:w-32">
                    <p className="text-[10px] text-white/40 uppercase font-black mb-1">Plays</p>
                    <p className="font-display font-bold text-xl">12k+</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex-1 md:w-32">
                    <p className="text-[10px] text-white/40 uppercase font-black mb-1">Rating</p>
                    <p className="font-display font-bold text-xl text-brand">4.8</p>
                 </div>
              </div>
           </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

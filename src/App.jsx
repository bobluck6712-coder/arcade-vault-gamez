import { useState } from 'react';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import gamesData from './data/games.json';

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(gamesData.map(game => game.category))];

  const filteredGames = gamesData.filter(game => {
    const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-20">
      <Navbar onSearchChange={setSearchQuery} searchQuery={searchQuery} />
      
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 uppercase leading-[0.9]">
            Level Up Your <br />
            <span className="text-brand">Gaming Era</span>
          </h1>
          <p className="text-white/40 max-w-xl text-lg">
            A premium sanctuary for unblocked arcade entertainment. 
            No installs, no trackers, just absolute performance.
          </p>
        </header>

        {/* Categories */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto no-scrollbar pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${
                activeCategory === category 
                  ? 'bg-brand border-brand text-white shadow-lg shadow-brand/20' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Game Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                onSelect={setSelectedGame}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-white/20 text-xl font-display">No games found matching your search...</p>
          </div>
        )}
      </main>

      {/* Game Player Modal */}
      <GamePlayer 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
      
      {/* Footer Decoration */}
      <footer className="mt-40 px-6 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-sm font-medium">
          <p>© 2024 ARCADE VAULT. UNBLOCKED & UNSTOPPABLE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

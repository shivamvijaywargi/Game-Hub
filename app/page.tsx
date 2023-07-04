import GameGrid from '@/components/GameGrid';
import GenreList from '@/components/GenreList';

export default function Home() {
  return (
    <main className="grid grid-cols-auto-1 sm:grid-cols-auto-2">
      <aside className="hidden lg:block p-4">
        <GenreList />
      </aside>
      <div className="p-4">
        <GameGrid />
      </div>
    </main>
  );
}

import GameGrid from '@/components/GameGrid';

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <aside className="hidden lg:block">Aside</aside>
      <div className="">
        <GameGrid />
      </div>
    </main>
  );
}

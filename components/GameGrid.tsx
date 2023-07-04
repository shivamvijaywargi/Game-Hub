import getGames from '@/services/get-games';
import React from 'react';
import GameCard from './GameCard';

export const revalidate = 3600;

const GameGrid = async () => {
  const gameData = await getGames();

  return (
    <div className="grid grid-cols-auto-1 sm:grid-cols-auto-2 lg:grid-cols-auto-3 xl:grid-cols-auto-4 2xl:grid-cols-auto-5 gap-8">
      {gameData?.map((game) => (
        <div key={game.id} className="self-stretch">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;

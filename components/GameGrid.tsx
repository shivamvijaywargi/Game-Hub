import getGames from '@/services/get-games';
import React from 'react';
import GameCard from './GameCard';

export const revalidate = 3600;

const GameGrid = async () => {
  const gameData = await getGames();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {gameData?.map((game) => (
        <div key={game.id} className="self-stretch">
          <GameCard game={game} />
        </div>
      ))}
    </div>
  );
};

export default GameGrid;

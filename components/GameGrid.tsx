import getGames from '@/services/get-games';
import React from 'react';

export const revalidate = 3600;

const GameGrid = async () => {
  const gameData = await getGames();

  return (
    <ul>
      {gameData?.map((game) => (
        <h2 key={game.id}>{game.name}</h2>
      ))}
    </ul>
  );
};

export default GameGrid;

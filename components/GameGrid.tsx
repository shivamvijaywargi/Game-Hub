import apiClient from '@/services/api-client';
import React from 'react';

export const revalidate = 3600;

interface IGame {
  id: number;
  name: string;
}

interface IFetchGamesResp {
  count: number;
  results: IGame[];
}

const gamesData = async () => {
  const resp = await apiClient.get<IFetchGamesResp>('/games');

  if (resp.status !== 200) {
    console.log('Failes to fetch data');
  }

  return resp.data.results;
};

const GameGrid = async () => {
  const gameData = await gamesData();

  return (
    <ul>
      {gameData.map((game) => (
        <h2 key={game.id}>{game.name}</h2>
      ))}
    </ul>
  );
};

export default GameGrid;

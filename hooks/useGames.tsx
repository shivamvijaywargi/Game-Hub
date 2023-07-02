'use client';

// This is not used in the app as of now, I need to find a way to appropriately use custom hooks in NextJS 13 app directory without making every other component a client component

import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

interface IGame {
  id: number;
  name: string;
}

interface IFetchGamesResp {
  count: number;
  results: IGame[];
}

const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<IFetchGamesResp>('/games')
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error));
  }, []);

  return { games, error };
};

export default useGames;

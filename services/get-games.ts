import { AxiosError } from 'axios';
import apiClient from './api-client';

interface IGame {
  id: number;
  name: string;
}

interface IFetchGamesResp {
  count: number;
  results: IGame[];
}

const getGames = async () => {
  try {
    const resp = await apiClient.get<IFetchGamesResp>('/games');

    if (resp.status !== 200) {
      throw new Error('Failed to fetch games.');
    }

    return resp.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message || 'Failed to fetch games.');
    }
  }
};

export default getGames;

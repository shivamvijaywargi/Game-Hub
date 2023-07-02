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
  const resp = await apiClient.get<IFetchGamesResp>('/games');

  if (resp.status !== 200) {
    console.log('Failes to fetch data');
  }

  return resp.data.results;
};

export default getGames;

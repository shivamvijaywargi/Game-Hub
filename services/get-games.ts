import apiClient, { AxiosError, CanceledError } from './api-client';
import getData from './get-data';

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGame {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
}

const getGames = async () => getData<IGame>('/games');

export default getGames;

import apiClient, { CanceledError, AxiosError } from './api-client';
import getData from './get-data';

export interface IGenre {
  id: number;
  name: string;
}

const getGenres = async () => getData<IGenre>('/genres');

export default getGenres;

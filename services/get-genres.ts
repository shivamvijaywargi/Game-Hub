import getData from './get-data';

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const getGenres = async () => getData<IGenre>('/genres');

export default getGenres;

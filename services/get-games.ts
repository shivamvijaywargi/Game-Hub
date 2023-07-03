import apiClient, { AxiosError, CanceledError } from './api-client';

export interface IGame {
  id: number;
  name: string;
  background_image: string;
}

interface IFetchGamesResp {
  count: number;
  results: IGame[];
}

const getGames = async () => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const resp = await apiClient.get<IFetchGamesResp>('/games', {
      signal,
    });

    if (resp.status !== 200) {
      throw new Error('Failed to fetch games.');
    }

    return resp.data.results;
  } catch (error) {
    if (error instanceof CanceledError) return;
    if ((error as AxiosError).name === 'AbortError') {
      // Request was aborted
      console.log('Request aborted');
    } else if (error instanceof AxiosError) {
      error.name = 'AbortError';
      throw new Error(error.message || 'Failed to fetch games.');
    }
  } finally {
    // Cancel the request if it is still ongoing
    if (!signal.aborted) {
      controller.abort();
    }
  }
};

export default getGames;

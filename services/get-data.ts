import apiClient, { CanceledError, AxiosError } from './api-client';

interface IFetchResponse<T> {
  count: number;
  results: T[];
}

const getData = async <T>(endpoint: string) => {
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const resp = await apiClient.get<IFetchResponse<T>>(endpoint, {
      signal,
    });

    if (resp.status !== 200) {
      throw new Error('Failed to fetch genres.');
    }

    return resp.data.results;
  } catch (error) {
    if (error instanceof CanceledError) return;
    if ((error as AxiosError).name === 'AbortError') {
      // Request was aborted
      console.log('Request aborted');
    } else if (error instanceof AxiosError) {
      error.name = 'AbortError';
      throw new Error(error.message || 'Failed to fetch genres.');
    }
  } finally {
    // Cancel the request if it is still ongoing
    if (!signal.aborted) {
      controller.abort();
    }
  }
};

export default getData;

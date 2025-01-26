// a general fetcher function used by useSWR
export async function fetcher<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) {
    return Promise.reject('Failed to fetch' + response.status);
  }
  return response.json();
}
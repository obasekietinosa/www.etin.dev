const API_BASE_URL =
  import.meta.env.PUBLIC_API_BASE_URL ?? "https://api.etin.dev";

const buildUrl = (path: string) => {
  if (path.startsWith("http")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

export const fetchFromApi = async <T>(path: string): Promise<T> => {
  const response = await fetch(buildUrl(path));

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${path}: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as T;
};

export const unwrapDataArray = <T>(payload: { data?: T[] } | T[]): T[] => {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray((payload as { data?: T[] }).data)) {
    return (payload as { data?: T[] }).data ?? [];
  }

  return [];
};

export const logApiError = (message: string, error: unknown) => {
  const reason =
    error instanceof Error ? `${error.message}\n${error.stack ?? ""}` : String(error);

  console.error(`[api] ${message}: ${reason}`);
};

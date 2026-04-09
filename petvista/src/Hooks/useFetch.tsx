import { useState } from "react";

type UseFetchProps = {
  url: string;
};

type UseFetchReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (url?: string) => Promise<void>;
};

export default function useFetch<T>(
  { url }: UseFetchProps
): UseFetchReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (fetchUrl?: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(fetchUrl ?? url);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result: unknown = await response.json();

      // Type assertion with safety
      setData(result as T);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}
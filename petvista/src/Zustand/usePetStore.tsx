import { useEffect } from "react";
import useFetch from "../Hooks/useFetch";


type Pet = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const API_URL = import.meta.env.VITE_API_BASE_URL as string;

const usePetStore = () => {
  const { data, loading, error, fetchData } = useFetch<Pet[]>({
    url: API_URL,
  });

  useEffect(() => {
    fetchData();
  }, [API_URL]);

  return { data, loading, error, refetch: fetchData };
};

export default usePetStore;
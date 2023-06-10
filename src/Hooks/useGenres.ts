import { useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
import { useEffect } from "react";

interface Genre {
  id: number;
  name: string;
}

interface GenreFetchResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGames] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<GenreFetchResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;

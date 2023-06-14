import { FetchResponse } from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import genres from "../Data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const getGenres = () => apiClient.get("/genres").then((res) => res.data);

  return useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;

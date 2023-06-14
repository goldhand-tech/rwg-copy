import ApiClient, { FetchResponse } from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import genres from "../Data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const apiClient = new ApiClient<Genre>("/genres");

  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;

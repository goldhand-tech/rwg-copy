import ApiClient, { FetchResponse } from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import ms from "ms";

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
    staleTime: ms("24h"),
    initialData: { count: genres.length, results: genres, next: null },
  });
};

export default useGenres;

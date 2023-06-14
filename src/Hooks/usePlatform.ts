import { useQuery } from "@tanstack/react-query";
import apiClient from "../Services/api-client";
import platform from "../Data/platform";
import { FetchResponse } from "../Services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const getGenres = () =>
    apiClient.get("/platforms/lists/parents").then((res) => res.data);

  return useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: getGenres,
    staleTime: Infinity,
    initialData: { count: platform.length, results: platform },
  });
};

export default usePlatforms;

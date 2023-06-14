import { useQuery } from "@tanstack/react-query";
import platform from "../Data/platform";
import ApiClient, { FetchResponse } from "../Services/api-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: Infinity,
    initialData: { count: platform.length, results: platform, next: null },
  });
};

export default usePlatforms;

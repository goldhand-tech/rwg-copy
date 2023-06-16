import { useQuery } from "@tanstack/react-query";
import ApiClient from "../Services/api-client";
import { Game } from "./useGames";

const useGame = (slug: string) => {
  const apiClient = new ApiClient<Game>("/games");
  console.log("Slug is" + slug);

  const query = useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
  return query;
};

export default useGame;

import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";
import { Platform } from "./usePlatform";
import ms from "ms";
import { GameQuery } from "./useGameQuery";
export interface Game {
  slug: string;
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  description_raw: string;
}

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

// const api = axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "270406b2b6b04126b449d89dea890279",
//   },
// });

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre,
          parent_platforms: gameQuery.platform,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: 20,
        },
      }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

// useQuery<FetchResponse<Game>, Error>({
//   queryKey: ["games", gameQuery],
//   queryFn: () =>
//     apiClient.getAll({
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     }),

// });

export default useGames;

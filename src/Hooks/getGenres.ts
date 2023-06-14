import useGenres from "./useGenres";
import { FetchResponse } from "../Services/api-client";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

const getGenre = (gameQuery: GameQuery) => {
  const { data: dataG } = useGenres();
  const dataGenre = dataG as FetchResponse<Genre>;

  const genre = dataGenre?.results.find((g) => g.id == gameQuery.genre);
  return genre;
};

export default getGenre;

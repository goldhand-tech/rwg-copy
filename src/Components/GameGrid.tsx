import useGames from "../Hooks/useGames";
import apiClient from "../Services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error ?? <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

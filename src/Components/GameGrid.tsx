import useGames from "../Hooks/useGames";
import apiClient from "../Services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";

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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {games.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

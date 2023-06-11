import useGames from "../Hooks/useGames";
import apiClient from "../Services/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

export const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error ?? <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={4}
        padding="10px"
      >
        {/* {isLoading &&
          skeleton.map((elem) => (
            <GameCardContainer key={elem}>
              <GameCardSkeleton key={elem} />
            </GameCardContainer>
          ))} */}

        {data.map((game) =>
          isLoading ? (
            <GameCardContainer key={game.id}>
              <GameCardSkeleton key={game.id} />
            </GameCardContainer>
          ) : (
            <GameCard game={game}></GameCard>
          )
        )}
      </SimpleGrid>
    </>
  );
};

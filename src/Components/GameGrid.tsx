import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  // const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error ?? <Text>{error}</Text>}
      <SimpleGrid
        key="gello"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="20px"
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
            <GameCard key={game.id} game={game}></GameCard>
          )
        )}
      </SimpleGrid>
    </>
  );
};

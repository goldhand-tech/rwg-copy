import useGames from "../Hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "../Hooks/useGameQuery";

export const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  // const skeleton = [1, 2, 3, 4, 5, 6];

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => (total += page.results.length), 0) || 0;

  return (
    <>
      {error ?? <Text>{error}</Text>}
      <InfiniteScroll
        loader={<h2>Loading...</h2>}
        dataLength={fetchedGamesCount}
        next={fetchNextPage}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        hasMore={hasNextPage || false}
      >
        <SimpleGrid
          key="gello"
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="20px"
        >
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) =>
                isLoading ? (
                  <GameCardContainer key={game.id}>
                    <GameCardSkeleton key={game.id} />
                  </GameCardContainer>
                ) : (
                  <GameCard key={game.id} game={game}></GameCard>
                )
              )}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>

      {/* {hasNextPage && (
        <Button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )} */}
    </>
  );
};

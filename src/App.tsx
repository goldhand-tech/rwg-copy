import { GridItem, Show, Grid } from "@chakra-ui/react";
import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
import { GenreList } from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import { PlatformSelector } from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usePlatform";
import { SortSelector } from "./Components/SortSelector";
import { Flex, Box } from "@chakra-ui/react";
import { GameHeading } from "./Components/GameHeading";

export interface GameQuery {
  genre: number | null;
  platform: number | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav" "aside main"`, //1024 px larger
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          ></NavBar>
        </GridItem>
        <Show above={"lg"}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre: genre.id })
              }
              selectedGenreId={gameQuery.genre || undefined}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={5} marginBottom={5}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <Flex>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectedPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform: platform.id })
                  }
                  selectedPlatformId={gameQuery.platform}
                ></PlatformSelector>
              </Box>

              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Flex>
          </Box>

          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

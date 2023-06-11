import { GridItem, Show, Grid } from "@chakra-ui/react";
import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";
import { GenreList } from "./Components/GenreList";
import { useState } from "react";
import { Genre } from "./Hooks/useGenres";
import { PlatformSelector } from "./Components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
          <NavBar></NavBar>
        </GridItem>
        <Show above={"lg"}>
          <GridItem area="aside" paddingX={5}>
            <GenreList
              onSelectGenre={setSelectedGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <PlatformSelector
            onSelectedPlatform={setSelectedPlatform}
            selectedPlatform={selectedPlatform}
          ></PlatformSelector>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

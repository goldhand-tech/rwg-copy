import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { GameGrid } from "../Components/GameGrid";
import { GameHeading } from "../Components/GameHeading";
import { GenreList } from "../Components/GenreList";
import { PlatformSelector } from "../Components/PlatformSelector";
import { SortSelector } from "../Components/SortSelector";

export const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: ` "aside main"`, //1024 px larger
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Outlet></Outlet>

      <Show above={"lg"}>
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5} marginBottom={5}>
          <GameHeading />
          <Flex>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

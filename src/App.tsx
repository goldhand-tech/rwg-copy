import { GridItem, Show, Grid } from "@chakra-ui/react";
import { NavBar } from "./Components/NavBar";
import { GameGrid } from "./Components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav" "aside main"`, //1024 px larger
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above={"lg"}>
          <GridItem area="aside">Aside</GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

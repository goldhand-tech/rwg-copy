import { GridItem, Show, Grid } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav""main"`,
          lg: `"nav nav" "aside main"`, //1024 px larger
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above={"lg"}>
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

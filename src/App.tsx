import { useState } from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformDropdown from "./components/PlatformDropdown";
import { Platform } from "./hooks/usePlatforms";
function App() {
  const [selectedGenre, setGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
  console.log(selectedGenre);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              setGenre={setGenre}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformDropdown
            selectedPlatform={selectedPlatform}
            setPlatform={setPlatform}
          ></PlatformDropdown>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

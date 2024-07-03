import { useState } from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformDropdown from "./components/PlatformDropdown";
import { Platform } from "./hooks/usePlatforms";
import SortingDropdown from "./components/SortingDropdown";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              setGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformDropdown
            selectedPlatform={gameQuery.platform}
            setPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          ></PlatformDropdown>
          <SortingDropdown></SortingDropdown>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

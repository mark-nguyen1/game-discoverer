import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import SkeletonGameCard from "./SkeletonGameCard";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);

  if (error) return error;
  return (
    <SimpleGrid
      spacing={4}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={10}
    >
      {isLoading &&
        Array.from({ length: 20 }).map((_, index) => {
          return <SkeletonGameCard key={index}></SkeletonGameCard>;
        })}

      {games.map((game) => {
        return <GameCard game={game} key={game.id}></GameCard>;
      })}
    </SimpleGrid>
  );
};

export default GameGrid;

import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import SkeletonGameCard from "./SkeletonGameCard";
const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletonAmount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  if (error) return error;
  return (
    <SimpleGrid
      spacing={10}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={10}
    >
      {isLoading &&
        skeletonAmount.map((_) => {
          return <SkeletonGameCard></SkeletonGameCard>;
        })}
      {games.map((game) => (
        <GameCard game={game} key={game.id}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

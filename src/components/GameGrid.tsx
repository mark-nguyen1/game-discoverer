import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return error;
  return (
    <SimpleGrid
      spacing={10}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding={10}
    >
      {games.map((game) => (
        <GameCard game={game} key={game.id}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

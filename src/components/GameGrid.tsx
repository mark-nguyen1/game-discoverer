import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return error;
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;

import { GameQuery } from "../App";
import useData from "./useData";

interface GameStation {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: GameStation }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.ordering,
        search: gameQuery.search,
        publishers: gameQuery.publishers?.id,
      },
    },
    [gameQuery]
  );

export default useGames;

import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformList from "./PlatformList";
import GameRating from "./GameRating";
import getCroppedImageUrl from "../services/images-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformList game={game}></PlatformList>
          <GameRating rating={game.metacritic}></GameRating>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;

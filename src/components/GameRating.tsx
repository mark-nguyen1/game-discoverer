import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const GameRating = ({ rating }: Props) => {
  const color = rating > 80 ? "green" : rating > 60 ? "orange" : "red";
  return (
    <Badge colorScheme={color} paddingX="6px" borderRadius="4px">
      {rating}
    </Badge>
  );
};

export default GameRating;

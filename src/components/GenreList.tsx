import {
  Stack,
  Skeleton,
  HStack,
  Image,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
import { Genre } from "../hooks/useGenres";
interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading)
    return (
      <Stack>
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton key={index} paddingY="5px" height="44px" />
        ))}
      </Stack>
    );

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="50px"
              borderRadius="8px"
            />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => setGenre(genre)}
              fontWeight={genre === selectedGenre ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

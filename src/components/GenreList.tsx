import {
  Stack,
  Skeleton,
  HStack,
  Image,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";

const GenreList = () => {
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
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;

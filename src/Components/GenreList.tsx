import useGenres, { Genre } from "../Hooks/useGenres";
import { List, HStack, Text, ListItem, Image, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/images-url";

export const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack justifyContent="space-between">
              <Image
                borderRadius={"10px"}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"lg"}> {genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }
};

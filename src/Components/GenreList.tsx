import useGenres, { Genre } from "../Hooks/useGenres";
import { List, HStack, Text, ListItem, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/images-url";

export const GenreList = () => {
  const { data } = useGenres();

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
};

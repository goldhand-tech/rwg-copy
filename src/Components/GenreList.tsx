import useGenres, { Genre } from "../Hooks/useGenres";
import {
  List,
  HStack,
  Text,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/images-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectGenre }: Props) => {
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
            <HStack>
              <Image
                borderRadius={"10px"}
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                key={genre.id}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
              >
                {" "}
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    );
  }
};

import useGenres, { Genre } from "../Hooks/useGenres";
import {
  List,
  HStack,
  ListItem,
  Image,
  Spinner,
  Button,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/images-url";
import { Heading } from "@chakra-ui/react";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Heading fontSize={"2xl"} marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  objectFit={"cover"}
                  borderRadius={"10px"}
                  boxSize="32px"
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                <Button
                  textAlign="left"
                  whiteSpace={"normal"}
                  key={genre.id}
                  fontSize={"lg"}
                  variant={"link"}
                  onClick={() => onSelectGenre(genre)}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                >
                  {" "}
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );
  }
};

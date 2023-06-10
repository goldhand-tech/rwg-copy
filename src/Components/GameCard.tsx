import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import { Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

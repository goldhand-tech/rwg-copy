import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Game } from "../Hooks/useGames";
import { Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CreditScore } from "./CreditScore";
import { HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/images-url";
import { Emoji } from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CreditScore score={game.metacritic}></CreditScore>
        </HStack>
        <Heading fontSize={"2xl"}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

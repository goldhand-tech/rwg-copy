import { Heading } from "@chakra-ui/react";
import getPlatform from "../Hooks/getPlatform";
import getGenre from "../Hooks/getGenres";
import useGameQueryStore from "../Hooks/useGameQuery";

export const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const genre = getGenre(gameQuery);
  const platform = getPlatform(gameQuery);

  const heading =
    `${platform?.name ?? ""} ` + `${genre?.name ?? ""} ` + "Games";
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

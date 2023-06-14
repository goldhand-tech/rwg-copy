import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../Hooks/useGenres";
import { FetchResponse } from "../Services/api-client";
import { Genre } from "../Hooks/useGenres";
import usePlatforms, { Platform } from "../Hooks/usePlatform";
import getPlatform from "../Hooks/getPlatform";
import getGenre from "../Hooks/getGenres";
interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
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

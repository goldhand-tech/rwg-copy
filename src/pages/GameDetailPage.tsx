import { useParams } from "react-router-dom";
import useGame from "../Hooks/useGame";
import { Heading, Spinner, Text, Box } from "@chakra-ui/react";

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner></Spinner>;
  if (error || !game) throw error;

  return (
    <>
      <Box padding={5} marginY={2}>
        <Heading>{game.name}</Heading>
        <Text>{game.description_raw}</Text>
      </Box>
    </>
  );
};

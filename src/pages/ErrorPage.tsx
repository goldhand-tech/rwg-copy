import { Heading, Text, Box } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import { NavBar } from "../Components/NavBar";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar></NavBar>
      <Box paddingY={5}>
        <Heading>Oops</Heading>
        <Text>{error ? "Unexpected error" : "Unfound page"}</Text>
      </Box>
    </>
  );
};

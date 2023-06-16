import { HStack, Image } from "@chakra-ui/react";
import logo from "../Assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import useGameQueryStore from "../Hooks/useGameQuery";

export const NavBar = () => {
  const searchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onSearch={searchText}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

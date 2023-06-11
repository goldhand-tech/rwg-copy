import React from "react";
import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useGames";

interface Props {
  onSelectedPlatform: (e: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((elem) => (
          <MenuItem
            onClick={() => onSelectedPlatform(elem)}
            key={elem.id}
            value={elem.id}
          >
            {elem.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

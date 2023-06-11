import React from "react";
import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((elem) => (
          <MenuItem key={elem.id} value={elem.id}>
            {elem.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by"}
      </MenuButton>
      <MenuList>
        <MenuItem>Menu</MenuItem>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Average grading</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Date added</MenuItem>
      </MenuList>
    </Menu>
  );
};

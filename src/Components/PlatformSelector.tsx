import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";
import { Platform } from "../Hooks/usePlatform";

interface Props {
  onSelectedPlatform: (e: Platform) => void;
  selectedPlatformId: number | null;
}

export const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();
  const platformName = data?.results.find((e) => e.id === selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformName?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((elem) => (
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

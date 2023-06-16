import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatform";
import { Platform } from "../Hooks/usePlatform";
import useGameQueryStore from "../Hooks/useGameQuery";

export const PlatformSelector = () => {
  const onSelectedPlatform = useGameQueryStore((s) => s.setPlatform);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platform);

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
            onClick={() => onSelectedPlatform(elem.id)}
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

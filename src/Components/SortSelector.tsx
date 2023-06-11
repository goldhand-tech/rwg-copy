import { Menu, MenuButton, Button, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find((elem) => elem.value == sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by " + (currentSortOrder ? currentSortOrder?.label : "")}
      </MenuButton>
      <MenuList>
        {sortOrders.map((elem) => (
          <MenuItem
            onClick={() => onSelectSortOrder(elem.value)}
            key={elem.value}
            value={elem.value}
          >
            {elem.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

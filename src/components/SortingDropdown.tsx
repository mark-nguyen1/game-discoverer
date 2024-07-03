import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortingDropdown = () => {
  const orderType = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginLeft={10}>
        {"Order by: "}
      </MenuButton>
      <MenuList>
        {orderType.map((order, index) => (
          <MenuItem onClick={() => console.log(order)} key={index}>
            {order}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingDropdown;

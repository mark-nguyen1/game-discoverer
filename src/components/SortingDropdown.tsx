import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrder: string | null;
  setOrder: (order: string | null) => void;
}
const SortingDropdown = ({ selectedOrder, setOrder }: Props) => {
  const orderType = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const orderTypeMap = new Map(
    orderType.map((item) => [item.value, item.label])
  );

  console.log("ordering: " + selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginLeft={10}>
        {"Order by: " +
          ((selectedOrder && orderTypeMap.get(selectedOrder)) || "Relevance")}
      </MenuButton>
      <MenuList>
        {orderType.map((order, index) => (
          <MenuItem onClick={() => setOrder(order.value)} key={index}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortingDropdown;

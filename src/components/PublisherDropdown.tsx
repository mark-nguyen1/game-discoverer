import usePublisher from "../hooks/usePublisher";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPublisher: Platform | null;
  setPublisher: (platform: Platform | null) => void;
}
const PublisherDropdown = ({ selectedPublisher, setPublisher }: Props) => {
  const { data: publishers, error } = usePublisher();

  const onClick = (clickedPlatform: Platform) => {
    setPublisher(clickedPlatform);
  };
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginLeft={5}>
        {selectedPublisher ? selectedPublisher.name : "Publisher"}
      </MenuButton>
      <MenuList>
        {publishers.map((publisher) => (
          <MenuItem onClick={() => onClick(publisher)} key={publisher.id}>
            {publisher.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PublisherDropdown;

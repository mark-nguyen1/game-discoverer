import usePlatforms from "../hooks/usePlatforms";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/usePlatforms";
interface Props {
  selectedPlatform: Platform | null;
  setPlatform: (platform: Platform | null) => void;
}
const PlatformDropdown = ({ selectedPlatform, setPlatform }: Props) => {
  const { data: platforms, error } = usePlatforms();

  const onClick = (clickedPlatform: Platform) => {
    setPlatform(clickedPlatform);
  };
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginLeft={10}>
        {selectedPlatform ? selectedPlatform.name : "Platform"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem onClick={() => onClick(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformDropdown;

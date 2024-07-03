import websiteLogo from "../assets/logo.webp";
import { Image, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchMenu from "./SearchMenu";
const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={websiteLogo} boxSize="60px" />
        <SearchMenu></SearchMenu>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;

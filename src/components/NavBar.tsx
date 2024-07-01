import websiteLogo from "../assets/logo.webp";
import { Image, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <>
      <HStack justify="space-between" padding="10px">
        <Image src={websiteLogo} boxSize="60px" />
        <Text>NavBar Template</Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;

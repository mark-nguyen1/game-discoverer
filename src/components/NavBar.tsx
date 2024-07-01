import websiteLogo from "../assets/logo.webp";
import { Image, HStack, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={websiteLogo} boxSize="60px" />
        <Text>NavBar Template</Text>
      </HStack>
    </>
  );
};

export default NavBar;

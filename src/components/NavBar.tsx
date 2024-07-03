import websiteLogo from "../assets/logo.webp";
import { Image, HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchMenu from "./SearchMenu";

interface Props {
  handleSubmit: (input: string) => void;
}
const NavBar = ({ handleSubmit }: Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={websiteLogo} boxSize="60px" />
        <SearchMenu handleSubmit={handleSubmit}></SearchMenu>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;

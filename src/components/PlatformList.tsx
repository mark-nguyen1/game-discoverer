import { Game } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaApple,
  FaAndroid,
  FaAppStoreIos,
  FaChrome,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  game: Game;
}

const PlatformList = ({ game }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    PlayStation: FaPlaystation,
    Xbox: FaXbox,
    PC: FaWindows,
    Linux: FaLinux,
    Nintendo: BsNintendoSwitch,
    Android: FaAndroid,
    iOS: FaAppStoreIos,
    Web: FaChrome,
    "Apple Macintosh": FaApple,
  };

  return (
    <HStack marginY={"3px"}>
      {game.parent_platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.name];
        return IconComponent ? (
          <Icon as={IconComponent} key={platform.name} color="gray.500" />
        ) : (
          <p>{platform.name}</p>
        );
      })}
    </HStack>
  );
};

export default PlatformList;

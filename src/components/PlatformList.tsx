import { Game } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
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
import { SiAtari, SiSega, SiApplearcade, SiCommodore } from "react-icons/si";
import { GiGameConsole } from "react-icons/gi";

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
    Atari: SiAtari,
    "3DO": GiGameConsole,
    "Neo Geo": SiApplearcade,
    SEGA: SiSega,
    "Commodore / Amiga": SiCommodore,
  };

  return (
    <HStack marginY={"3px"}>
      {game.parent_platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.name];
        return IconComponent ? (
          <Icon as={IconComponent} key={platform.id} color="gray.500" />
        ) : null;
      })}
    </HStack>
  );
};

export default PlatformList;

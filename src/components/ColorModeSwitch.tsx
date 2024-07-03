import { HStack, useColorMode, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          onChange={toggleColorMode}
          colorScheme="teal"
          whiteSpace="nowrap"
        >
          {colorMode === "light" ? "Light" : "Dark"} Mode
        </Switch>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;

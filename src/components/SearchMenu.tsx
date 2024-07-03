import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchMenu = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <FaSearch></FaSearch>
      </InputLeftElement>
      <Input
        borderRadius={15}
        size="lg"
        placeholder="Search games"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchMenu;

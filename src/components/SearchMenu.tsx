import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  handleSubmit: (input: string) => void;
}

const SearchMenu = ({ handleSubmit }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) handleSubmit(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <FaSearch></FaSearch>
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={15}
          size="lg"
          placeholder="Search games"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchMenu;

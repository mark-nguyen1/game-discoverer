import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <Button colorScheme="blue" onClick={handleClick}>
        {count}
      </Button>
    </>
  );
}

export default App;

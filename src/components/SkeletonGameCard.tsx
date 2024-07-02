import {
  Skeleton,
  SkeletonText,
  Card,
  CardBody,
  Heading,
  HStack,
} from "@chakra-ui/react";

import GameCardContainer from "./GameCardContainer";
const SkeletonGameCard = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="210px" />
        <CardBody>
          <Skeleton>
            <Heading fontSize="2xl">Should not be seen</Heading>
          </Skeleton>
          <SkeletonText>
            <HStack justify="space-between">
              <HStack></HStack>
              <HStack></HStack>
            </HStack>
          </SkeletonText>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default SkeletonGameCard;

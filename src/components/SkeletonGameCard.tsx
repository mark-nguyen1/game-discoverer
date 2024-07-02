import {
  Skeleton,
  SkeletonText,
  Card,
  CardBody,
  Heading,
  HStack,
} from "@chakra-ui/react";

const SkeletonGameCard = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
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
  );
};

export default SkeletonGameCard;

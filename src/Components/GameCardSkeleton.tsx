import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

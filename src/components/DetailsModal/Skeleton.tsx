import { Skeleton, Stack } from '@chakra-ui/react';

export function DetailsModalSkeleton() {
  return (
    <Stack>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
      <Skeleton h={25}></Skeleton>
    </Stack>
  );
}

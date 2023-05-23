import { Skeleton, Stack } from '@chakra-ui/react';

export function UpsertFormSkeleton() {
  return (
    <Stack>
      <Skeleton h={10} w={150} mb={3}></Skeleton>
      <Skeleton h={30} mb={3}></Skeleton>

      <Skeleton h={10} w={150} mb={3}></Skeleton>
      <Skeleton h={30} mb={3}></Skeleton>

      <Skeleton h={10} w={150} mb={3}></Skeleton>
      <Skeleton h={30} mb={3}></Skeleton>

      <Skeleton h={10} w={150} mb={3}></Skeleton>
      <Skeleton h={30} mb={3}></Skeleton>
    </Stack>
  );
}

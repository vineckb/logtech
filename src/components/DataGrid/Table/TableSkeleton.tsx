import { Skeleton, Stack } from '@chakra-ui/react';

export function TableSkeleton() {
  return (
    <Stack>
      <Skeleton h={30} mb={3} />
      <Skeleton h={30} mb={3} />
      <Skeleton h={30} mb={3} />
      <Skeleton h={30} mb={3} />
      <Skeleton h={30} mb={3} />
      <Skeleton h={30} mb={3} />
    </Stack>
  );
}

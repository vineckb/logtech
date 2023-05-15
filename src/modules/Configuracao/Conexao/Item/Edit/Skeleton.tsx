import { Skeleton, Stack } from '@chakra-ui/react';

export function ContentSkeleton() {
  return (
    <Stack m={6}>
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
      <Skeleton h={30} />
    </Stack>
  );
}

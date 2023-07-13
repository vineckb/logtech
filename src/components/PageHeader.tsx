import { Flex, Spacer } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { PageTitle } from './PageTitle';

export interface PageHeaderProps extends PropsWithChildren {
  title: string;
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <Flex pb={5} flexWrap="nowrap">
      <PageTitle>{title}</PageTitle>
      <Spacer flex={1} minW="50px" />

      {children}
    </Flex>
  );
}

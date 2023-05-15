import { ModalHeader, ModalHeaderProps } from '@chakra-ui/react';

export function OverviewHeader({ children, ...props }: ModalHeaderProps) {
  return <ModalHeader {...props}>{children}</ModalHeader>;
}

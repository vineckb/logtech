import { useDisclosure } from '@chakra-ui/react';
import { AppBar } from '../AppBar';
import { SideNav } from '../SideNav';

export function Layout() {
  const { getButtonProps, isOpen: open } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <div>
      <AppBar open={open} buttonProps={getButtonProps()} />
      <SideNav open={open} />
    </div>
  );
}

import { useDisclosure } from '@chakra-ui/react';
import { AppBar } from '@/components/AppBar';
import { SideNav } from '@/components/SideNav';

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

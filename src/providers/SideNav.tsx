import { SideNavContext } from '@/contexts/SideNav';
import { useDisclosure } from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SideNavProviderProps {
  children?: ReactElement;
}

export function SideNavProvider({ children }: SideNavProviderProps) {
  const { getButtonProps, isOpen: open } = useDisclosure({
    defaultIsOpen: true,
  });
  const context = { open, buttonProps: getButtonProps() };
  return (
    <SideNavContext.Provider value={context}>
      {children}
    </SideNavContext.Provider>
  );
}

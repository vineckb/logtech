import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { OverviewModalContext } from './context';

interface OverviewModalProviderProps {
  onClose: () => void;
  children?: React.ReactElement | React.ReactElement[];
}

export function OverviewModal({
  children,
  onClose,
}: OverviewModalProviderProps) {
  const context = {};

  return (
    <OverviewModalContext.Provider value={context}>
      <Modal
        isOpen={true}
        onClose={onClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </Modal>
    </OverviewModalContext.Provider>
  );
}

export * from './Header';
export * from './Footer';
export * from './Content';

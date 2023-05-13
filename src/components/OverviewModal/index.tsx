import { OverviewModalContext } from './context';
import { redirect } from 'react-router-dom';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

interface OverviewModalProviderProps {
  children: React.ReactElement | React.ReactElement[];
  back: string;
}

export function OverviewModal({ children, back }: OverviewModalProviderProps) {
  const { isOpen, onClose } = useDisclosure({ isOpen: true });

  function handleClose() {
    onClose();
    if (back) {
      redirect(back);
    }
  }
  console.log(isOpen);

  const context = {
    handleClose,
  };

  return (
    <OverviewModalContext.Provider value={context}>
      <Modal
        isOpen={true}
        onClose={handleClose}
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>{children}</ModalContent>
      </Modal>
    </OverviewModalContext.Provider>
  );
}

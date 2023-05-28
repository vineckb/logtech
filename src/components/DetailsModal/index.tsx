import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DetailsModalSkeleton } from './Skeleton';

interface DetailsModalProps {
  children: React.ReactNode;
  title: React.ReactNode;
  isLoading: boolean;
}

export function DetailsModal({
  children,
  isLoading,
  title,
  ...modalContentProps
}: DetailsModalProps & Omit<ModalContentProps, 'children' | 'title'>) {
  const navigate = useNavigate();

  function handleClose() {
    navigate('..');
  }
  return (
    <Modal isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent {...modalContentProps}>
        <ModalHeader>
          {title}
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          {isLoading && <DetailsModalSkeleton />}
          {!isLoading && children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

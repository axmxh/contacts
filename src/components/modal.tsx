import {
	Modal as ChakraModal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	buttonText?: string;
	title?: string;
	size?: string;
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
	onSubmit?: (e: any) => void;
}

function Modal({
	children,
	title,
	isOpen,
	onClose,
	size = 'md',
}: Props): ReactElement {
	return (
		<ChakraModal
			size={size}
			isOpen={isOpen}
			onClose={onClose}
			closeOnOverlayClick={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textAlign="center" fontWeight="bold">
					{title}
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</ChakraModal>
	);
}

export default Modal;

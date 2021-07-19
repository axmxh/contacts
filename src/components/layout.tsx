import { Box, useDisclosure } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from './header';
import Sidebar from './sidebar';

interface Props {
	children: ReactNode;
}

const Layout = ({ children }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const handleToggle = () => (isOpen ? onClose() : onOpen());

	return (
		<Box bg="#F6F7F8">
			<Sidebar isOpen={isOpen} />
			<Header isOpen={isOpen} handleToggle={handleToggle} />
			<Box p="3" marginStart={isOpen ? '250px' : '0'}>
				<>{children}</>
			</Box>
		</Box>
	);
};

export default Layout;

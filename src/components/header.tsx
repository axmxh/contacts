import React, { ReactElement } from 'react';
import { Box, Flex, FlexProps } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
interface Props {
	props?: FlexProps;
	handleToggle: () => void;
	isOpen: boolean;
}

function Header({ handleToggle, isOpen, props }: Props): ReactElement {
	return (
		<>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				padding={6}
				marginStart={isOpen ? '250px' : '0'}
				bg="white"
				color="black"
				borderBottom="#E7E3E3 solid 1px"
				{...props}
			>
				<Box
					as="button"
					display={{ base: 'block', md: 'block' }}
					onClick={handleToggle}
				>
					<HamburgerIcon cursor="pointer" />
				</Box>

				<Box
					display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
					mt={{ base: 4, md: 0 }}
				>
					Profile
				</Box>
			</Flex>
		</>
	);
}

export default React.memo(Header);

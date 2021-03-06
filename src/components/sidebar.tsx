import { Center, Image, Stack, Text, Box, Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Logo from '../assets/imgs/logo.png';
import { Link } from 'react-router-dom';
import { Setting, User } from '../assets/svgs';
import { useLocation } from 'react-router-dom';
interface Props {
	isOpen: boolean;
}

function Sidebar({ isOpen }: Props): ReactElement {
	const { pathname } = useLocation();

	return (
		<Stack
			position="fixed"
			left="0"
			top="0"
			bottom="0"
			direction={{ base: 'column', md: 'row' }}
			display={{ base: isOpen ? 'block' : 'none' }}
			width={{ base: '250px', md: '250px' }}
			alignItems="center"
			flexGrow={1}
			mt={{ base: 4, md: 0 }}
			bg="#192842"
		>
			<Center height="72px" borderBottom="1px solid #141D32">
				<Image src={Logo} />
			</Center>

			<Box py="5">
				<Link to="/">
					<Flex
						alignItems="center"
						color="white"
						py="2"
						px="5"
						backgroundColor={pathname === '/' ? '#233456' : ''}
					>
						<User />
						<Text ps="2">Contacts</Text>
					</Flex>
				</Link>
				<Link to="/setting">
					<Flex
						backgroundColor={pathname === '/setting' ? '#233456' : ''}
						alignItems="center"
						color="white"
						py="2"
						px="5"
					>
						<Setting />
						<Text ps="2">Setting</Text>
					</Flex>
				</Link>
			</Box>
		</Stack>
	);
}

export default Sidebar;

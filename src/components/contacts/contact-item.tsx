import {
	Box,
	HStack,
	Image,
	Td,
	Text,
	Tr,
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import React from 'react';
import { Dot } from '../../assets/svgs';
import { formatContact, random } from '../../data/contacts';
import { updateUser } from '../../services/contacts';
import Modal from '../modal';
import ContactForm from './contact-form';

interface Props {
	firstName?: string;
	lastName?: string;
	avatar?: string;
	email?: string;
	contribution?: number;
	active?: boolean;
	id: number;
}

const ContactItem = ({
	firstName,
	lastName,
	avatar,
	email,
	active = true,
	id
}: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const handleRowClick = () => {
		onOpen();
	};

	const onFormSubmit = (e: any) => {
		e.preventDefault();
		const data = formatContact(e);
		updateUser(id, data).then((res) => {
			onClose();
			toast({
				title: 'Contact updated.',
				status: 'success',
				duration: 3000,
				position: 'top-right',
				isClosable: true
			});
		});
	};
	return (
		<>
			<Modal
				title={`Edit Contact "${firstName}"`}
				onClose={onClose}
				onOpen={onOpen}
				isOpen={isOpen}
			>
				<ContactForm
					onClose={onClose}
					onFormSubmit={onFormSubmit}
					firstName={firstName}
					lastName={lastName}
					gender="male"
					email={email}
					contribution={random('contribution')}
					active={active}
				/>
			</Modal>
			<Tr cursor="pointer" onClick={handleRowClick}>
				<Td paddingBlock="2">
					<HStack borderInlineEnd="1px solid #E7E3E3">
						<Box position="relative">
							<Image borderRadius="full" boxSize="36px" src={avatar} />
							{active && (
								<Box position="absolute" right="-2px" bottom="0">
									<Dot />
								</Box>
							)}
						</Box>
						<Text>
							{firstName} {lastName}
						</Text>
					</HStack>
				</Td>
				<Td paddingBlock="2">
					<Text lineHeight="36px" borderInlineEnd="1px solid #E7E3E3">
						{random('job')}
					</Text>
				</Td>
				<Td paddingBlock="2">
					<Text lineHeight="36px" borderInlineEnd="1px solid #E7E3E3">
						{email}
					</Text>
				</Td>
				<Td>{random('contribution')}</Td>
			</Tr>
		</>
	);
};

export default ContactItem;

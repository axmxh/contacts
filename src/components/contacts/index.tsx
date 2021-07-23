import { SearchIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	HStack,
	Input,
	InputGroup,
	InputLeftElement,
	Table,
	Tbody,
	useDisclosure,
	useToast
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import { formatContact } from '../../data/contacts';
import { createUser, getUsers } from '../../services/contacts';
import Modal from '../modal';
import ContactForm from './contact-form';
import ContactItem from './contact-item';

interface Props {}

const Contacts = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();
	const [contacts, setContacts] = useState([]);
	const [query, setQuery] = useState('');

	const fetchUsers = () => {
		getUsers().then((res: any) => {
			setContacts(res.data);
		});
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	const onFormSubmit = (e: any) => {
		e.preventDefault();
		const data = formatContact(e);
		createUser(data).then((res) => {
			onClose();
			toast({
				title: 'Contact created.',
				status: 'success',
				duration: 3000,
				position: 'top-right',
				isClosable: true
			});
		});
	};

	const search = (e: any) => {
		const word: string = e.target.value;
		setQuery(word);
		if (word !== '') {
			const results = contacts.filter((contact) =>
				JSON.stringify(contact).toLowerCase().includes(word.toLowerCase())
			);
			setContacts(results);
		} else if (word === '') {
			fetchUsers();
		}
	};

	return (
		<Box>
			<Modal
				title={`Add New Contact`}
				onClose={onClose}
				onOpen={onOpen}
				isOpen={isOpen}
			>
				<ContactForm onClose={onClose} onFormSubmit={onFormSubmit} />
			</Modal>
			<HStack>
				<InputGroup>
					<InputLeftElement ps="3">
						<SearchIcon color="gray.300" />
					</InputLeftElement>
					<Input
						value={query}
						onChange={search}
						placeholder="Search user"
						variant="filled"
						type="text"
					/>
				</InputGroup>
				<Button fontWeight="light" onClick={onOpen} variant="outline">
					Add
				</Button>
			</HStack>

			<Box border="1px solid #E7E3E3" p="4" borderRadius="sm" mt="2" bg="white">
				<Table size="md" border="1px solid #ECE9E9" p="2">
					<Tbody>
						{contacts.length > 0 &&
							contacts.map((contact: any) => {
								return (
									<ContactItem
										firstName={contact.first_name}
										lastName={contact.last_name}
										avatar={contact.avatar}
										email={contact.email}
										key={contact.id}
										id={contact.id}
									/>
								);
							})}
					</Tbody>
				</Table>
			</Box>
		</Box>
	);
};

export default Contacts;

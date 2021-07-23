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
	useDisclosure
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { createUser, getUsers } from '../../services/contacts';
import Modal from '../modal';
import ContactForm from './contact-form';
import ContactItem from './contact-item';

interface Props {}

const Contacts = (props: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

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
		const firstName = e.target.elements['firstName'].value;
		const lastName = e.target.elements['lastName'].value;
		const email = e.target.elements['email'].value;
		const gender: any = Array.from(e.target.elements).find(
			(element: any) => element.type === 'radio' && element.checked
		);
		const department = e.target.elements['department'].value;
		const contribution = e.target.elements['contribution'].value;
		const active: any = Array.from(e.target.elements).find(
			(element: any) => element.type === 'checkbox'
		);
		const data = {
			name: `${firstName} ${lastName}`,
			job: 'zion resident',
			email,
			gender,
			contribution,
			active,
			department
		};

		createUser(data).then((res) => {
			onClose();
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
				<Button onClick={onOpen} variant="outline">
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

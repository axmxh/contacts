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
			// console.log('res', res);
			setContacts(res.data);
		});
	};
	useEffect(() => {
		fetchUsers();
	}, []);
	// console.log(contacts);

	const onFormSubmit = (e: any) => {
		e.preventDefault();
		const firstName = e.target.elements['firstName'];
		const lastName = e.target.elements['lastName'];
		const email = e.target.elements['email'];
		const gender: any = Array.from(e.target.elements).find(
			(element: any) => element.type === 'radio' && element.checked
		);

		const contribution = e.target.elements['contribution'];
		const active: any = Array.from(e.target.elements).find(
			(element: any) => element.type === 'checkbox'
		);
		const data = {
			name: `${firstName.value} ${lastName.value}`,
			job: 'zion resident',
			email: email.value,
			contribution: contribution.value,
			gender: gender.value,
			active: active.checked,
		};
		createUser(data).then((res) => {
			// console.log('res', res);
			onClose();
		});
		console.log(
			'form',
			firstName.value,
			lastName.value,
			email.value,
			contribution.value,
			gender.value,
			active.checked
		);
	};

	const search = (e: any) => {
		const word: string = e.target.value;
		setQuery(word);
		if (word !== '') {
			const results = contacts.filter((contact) =>
				JSON.stringify(contact).toLowerCase().includes(word.toLowerCase())
			);
			console.log('res', results, word);
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
				<ContactForm
					onClose={onClose}
					onFormSubmit={onFormSubmit}
					// firstName={firstName}
					// lastName={lastName}
					// gender="other"
					// email={email}
					// contribution={contribution}
					// active={active}
				/>
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

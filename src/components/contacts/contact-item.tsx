import {
	Box,
	HStack,
	Image,
	Td,
	Text,
	Tr,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Dot } from '../../assets/svgs';
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

const jobs = [
	'Frontend Engineer',
	'Backend Engineer',
	'QA Engineer',
	'Product Manger',
	'CEO',
	'CTO',
];
const contributions = [454545, 525989, 9893565, 5465464, 646464, 636666];
const random = () => Math.floor(Math.random() * jobs.length);

const ContactItem = ({
	firstName,
	lastName,
	avatar,
	email,
	active = true,
	id,
}: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleRowClick = () => {
		onOpen();
	};

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
		};
		updateUser(id, data).then((res) => {
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
					gender="other"
					email={email}
					contribution={contributions[random()]}
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
						{jobs[random()]}
					</Text>
				</Td>
				<Td paddingBlock="2">
					<Text lineHeight="36px" borderInlineEnd="1px solid #E7E3E3">
						{email}
					</Text>
				</Td>
				<Td>{contributions[random()]}</Td>
			</Tr>
		</>
	);
};

export default ContactItem;

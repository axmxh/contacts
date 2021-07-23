import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Select,
	InputGroup,
	Radio,
	RadioGroup,
	Stack
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
	onFormSubmit: (e: any) => void;
	onClose: () => void;
	firstName?: string;
	lastName?: string;
	gender?: string;
	email?: string;
	contribution?: number;
	active?: boolean;
}

const ContactForm = ({
	onFormSubmit,
	onClose,
	firstName,
	lastName,
	gender,
	email,
	contribution,
	active
}: Props) => {
	const [value, setValue] = useState('male');
	const [checked, setChecked] = useState(active);
	console.log('---c', value, checked);

	return (
		<form onSubmit={onFormSubmit}>
			<HStack>
				<FormControl pb="5">
					<FormLabel m="0">First Name:</FormLabel>
					<InputGroup>
						<Input
							type="text"
							name="firstName"
							required={true}
							defaultValue={firstName}
							placeholder="First Name"
						/>
					</InputGroup>
				</FormControl>
				<FormControl pb="5">
					<FormLabel m="0">Last Name:</FormLabel>
					<InputGroup>
						<Input
							name="lastName"
							defaultValue={lastName}
							type="text"
							placeholder="Last Name"
						/>
					</InputGroup>
				</FormControl>
			</HStack>
			<HStack>
				<FormControl>
					<FormLabel m="0">Gender:</FormLabel>
					<RadioGroup
						onChange={(value) => setValue(value)}
						name="gender"
						defaultValue={value}
					>
						<Stack direction="row">
							<Radio value="male">Male</Radio>
							<Radio value="female">Female</Radio>
							<Radio value="other">Other</Radio>
						</Stack>
					</RadioGroup>
				</FormControl>
			</HStack>
			<HStack>
				<FormControl pb="5">
					<FormLabel m="0">Email:</FormLabel>
					<InputGroup>
						<Input
							name="email"
							required={true}
							defaultValue={email}
							type="email"
							placeholder="Email"
						/>
					</InputGroup>
				</FormControl>
			</HStack>
			<HStack>
				<FormControl pb="5">
					<FormLabel m="0">Department:</FormLabel>
					<InputGroup>
						<Select name="department" placeholder="Select option">
							<option value="marketing">Marketing</option>
							<option value="sales">Sales</option>
							<option value="it">IT</option>
							<option value="support">Support</option>
						</Select>
					</InputGroup>
				</FormControl>
				<FormControl pb="5">
					<FormLabel m="0">Contribution:</FormLabel>
					<InputGroup>
						<Input
							name="contribution"
							defaultValue={contribution}
							type="text"
							placeholder="Contribution"
						/>
					</InputGroup>
				</FormControl>
			</HStack>
			<HStack>
				<Checkbox
					name="active"
					onChange={() => setChecked((prev) => !prev)}
					checked={active}
					defaultChecked={active}
				>
					Is Active
				</Checkbox>
			</HStack>
			<HStack mt="3" justifyContent="flex-end">
				<Button variant="outline" mr={3} onClick={onClose}>
					Cancel
				</Button>
				<Button type="submit" variant="solid">
					Save
				</Button>
			</HStack>
		</form>
	);
};

export default ContactForm;

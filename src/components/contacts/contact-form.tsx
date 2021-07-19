import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	HStack,
	Input,
	InputGroup,
	Radio,
	RadioGroup,
	Stack,
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
	active,
}: Props) => {
	const [value, setValue] = useState('male');
	const [checked, setChecked] = useState(active);
	console.log('---c', value, checked);

	return (
		<form onSubmit={onFormSubmit}>
			<HStack>
				<FormControl
					// isInvalid={!!errors?.password?.message}
					// errortext={errors?.password?.message}
					pb="5"
				>
					<FormLabel m="0">First Name:</FormLabel>
					<InputGroup>
						<Input
							type="text"
							name="firstName"
							defaultValue={firstName}
							placeholder="First Name"
						/>
					</InputGroup>
					{/* <FormErrorMessage m="0">{errors?.password?.message}</FormErrorMessage> */}
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
							defaultValue={email}
							type="email"
							placeholder="Email"
						/>
					</InputGroup>
					{/* <FormErrorMessage m="0">{errors?.password?.message}</FormErrorMessage> */}
				</FormControl>
			</HStack>
			<HStack>
				<FormControl pb="5">
					<FormLabel m="0">Departure:</FormLabel>
					<InputGroup>
						<Input type="text" placeholder="Departure" />
					</InputGroup>
					{/* <FormErrorMessage m="0">{errors?.password?.message}</FormErrorMessage> */}
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
					{/* <FormErrorMessage m="0">{errors?.password?.message}</FormErrorMessage> */}
				</FormControl>
			</HStack>
			<HStack>
				<Checkbox
					// isNative
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

import { extendTheme } from '@chakra-ui/react';

const colors = {
	green: {
		900: '#49CC99',
		500: '#49CC99',
		100: 'transparent'
	},
	gray: {
		300: '#F6F7F8'
	}
};

const components = {
	Button: {
		baseStyle: {
			borderRadius: '3xl',
			width: '135px',
			height: '32px'
		},
		variants: {
			solid: {
				border: '1px solid green',
				color: 'white',
				bg: 'green',
				_hover: {
					color: 'green'
				}
			},
			outline: {
				border: '1px solid green',
				color: 'green',
				bg: 'white',
				_hover: {
					bg: 'gray',
					color: 'white'
				}
			}
		}
	}
};

const sizes = {
	10: '2em'
};

const theme = extendTheme({ colors, components, sizes });

export default theme;

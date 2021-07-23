import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts';
import theme from './theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<div className="App">
					<Layout>
						<Switch>
							<Route exact path="/">
								Setting
							</Route>
							<Route path="/contacts">
								<Contacts />
							</Route>
						</Switch>
					</Layout>
				</div>
			</BrowserRouter>
		</ChakraProvider>
	);
}

export default App;

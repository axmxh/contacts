const BASE_URL: string =
	'https://reqres.in/api' || (process.env.BASE_URL as string);

interface Header {
	'Content-Type'?: string;
	Accept?: string;
	Authorization?: string;
	redirect?: string;
}

export interface ApiOptions {
	path: string;
	method?: string;
	body?: object;
	headers?: Header;
}

const baseFetch = ({
	path,
	method = 'GET',
	body,
	headers,
}: ApiOptions): Promise<any> => {
	return new Promise((resolve, reject) => {
		fetch(`${BASE_URL}${path}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				...headers,
			},
			body: JSON.stringify(body),
		})
			.then((response) => {
				resolve(response.json());
			})
			.catch((error) => {
				reject(error);
			});
	});
};

export default baseFetch;

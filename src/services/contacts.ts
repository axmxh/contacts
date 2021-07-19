import baseFetch from './base';

export const getUsers = (): Promise<any> => {
	return baseFetch({ path: '/users' });
};

export const createUser = (data: any): Promise<any> => {
	return baseFetch({ path: `/users`, method: 'POST', body: data });
};

export const updateUser = (id: number, data: any): Promise<any> => {
	return baseFetch({ path: `/users/${id}`, method: 'PATCH', body: data });
};

export const addUser = (id: number): Promise<any> => {
	return baseFetch({ path: `/users/${id}` });
};

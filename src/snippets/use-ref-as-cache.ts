import { useEffect, useRef, useState } from 'react';

interface User {
	username: string;
	id: number;
}

const generateUsers = () => Array.from({ length: 1000 }, (_, i): User => ({ username: `User: ${i}`, id: i }));

export const useUsersSearch = () => {
	const cache = useRef<Record<string, User[]>>({});
	const [ users, setUsers ] = useState<User[]>([]);

	const setupUsers = () => {
		setUsers(generateUsers());
	};

	const search = (query: string) => {
		if (cache.current.hasOwnProperty(query)) {
			setUsers(cache.current[query]);
			return;
		}

		const regex = new RegExp(query, 'i');

		setUsers((prevUsers) => {
			const filteredUsers = prevUsers.filter((user) => regex.test(user.username));
			cache.current[query] = filteredUsers;
			return filteredUsers;
		});
	};

	useEffect(setupUsers, []);

	return [ users, search ];
};

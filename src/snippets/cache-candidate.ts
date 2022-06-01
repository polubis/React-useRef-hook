import { useEffect, useState } from "react";

interface User {
  username: string;
  id: number;
}

const generateUsers = () =>
  Array.from(
    { length: 1000 },
    (_, i): User => ({ username: `User: ${i}`, id: i })
  );

export const useUsersSearch = () => {
  const [users, setUsers] = useState<User[]>([]);

  const setupUsers = () => {
    setUsers(generateUsers());
  };

  const search = (query: string) => {
    // You need caching here
    const regex = new RegExp(query, "i");
    setUsers((prevUsers) =>
      prevUsers.filter((user) => regex.test(user.username))
    );
  };

  useEffect(setupUsers, []);

  return [users, search];
};

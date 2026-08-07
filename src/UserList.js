import React, { useEffect, useState } from 'react';
import { fetchUsers } from './api';

export default function UserList() {
  // Holds the list of users returned from the API.
  const [users, setUsers] = useState([]);

  // Fetch user data once when the component mounts.
  // The UI will show a loading state until this asynchronous call completes.
  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {/* Show a loading message until the API response arrives. */}
      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        // Render each user after the data has been successfully fetched.
        users.map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </div>
  );
}

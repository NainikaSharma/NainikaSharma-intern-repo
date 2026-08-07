import { render, screen } from '@testing-library/react';
import UserList from './UserList';
import { fetchUsers } from './api';
jest.mock('./api');
test('displays users returned from API', async () => {
  fetchUsers.mockResolvedValue([
    { id: 1, name: 'Nainika' },
    { id: 2, name: 'Sharma' },
  ]);

  render(<UserList />);

  // Initial loading state
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  // Wait for async render
  const user1 = await screen.findByText('Nainika');
  const user2 = await screen.findByText('Sharma');

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
});

export const fetchUsers = async () => {
  const res = await fetch('https://example.com/users');
  return res.json();
};

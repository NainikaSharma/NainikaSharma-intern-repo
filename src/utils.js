// Utility function to safely extract a user's name.
// Includes guard clauses to prevent crashes from invalid inputs.

export function getUserName(user) {
  // Guard clause: ensure user object exists
  if (!user || typeof user !== 'object') {
    return 'Unknown User';
  }

  // Guard clause: ensure name exists and is a string
  if (!user.name || typeof user.name !== 'string') {
    return 'Unknown User';
  }

  // Safe to use .toUpperCase() now
  return user.name.toUpperCase();
}

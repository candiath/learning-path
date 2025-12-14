// Example showing how to import from mixed exports

import UserService, { UserData, validateEmail, formatUserName } from './mixed-exports';

// Use the default export
const service = new UserService();

// Use the named exports
const user: UserData = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
};

// Validate using named export function
if (validateEmail(user.email)) {
  console.log('Email is valid');
  service.addUser(user);
}

// Format name using named export function
console.log('Formatted name:', formatUserName(user));

// Get users from the service (default export)
console.log('All users:', service.getAllUsers());

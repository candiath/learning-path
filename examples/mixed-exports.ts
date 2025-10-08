// Example: Mixing Default and Named Exports
// This file demonstrates using both patterns in the same module

/**
 * Named exports for utility functions and types
 */
export interface UserData {
  id: string;
  name: string;
  email: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formatUserName = (user: UserData): string => {
  return user.name.toUpperCase();
};

/**
 * Default export for the main functionality
 */
class UserService {
  private users: UserData[] = [];

  addUser(user: UserData): void {
    if (!validateEmail(user.email)) {
      throw new Error('Invalid email address');
    }
    this.users.push(user);
  }

  getUser(id: string): UserData | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): UserData[] {
    return [...this.users];
  }
}

export default UserService;

/**
 * HOW TO USE:
 * 
 * import UserService, { UserData, validateEmail, formatUserName } from './mixed-exports';
 * 
 * const service = new UserService();
 * const user: UserData = { id: '1', name: 'John', email: 'john@example.com' };
 * 
 * if (validateEmail(user.email)) {
 *   service.addUser(user);
 * }
 */

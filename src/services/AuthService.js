
const users = [];

export const authService = {
  register(email, password) {
    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return { success: false, message: 'User with this email already exists.' };
    }

    // Register the user
    const newUser = { email, password };
    users.push(newUser);

    return { success: true, message: 'Registration successful.' };
  },

  login(email, password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      return { success: true, user, message: 'Login successful.' };
    } else {
      return { success: false, message: 'Invalid email or password.' };
    }
  },
};

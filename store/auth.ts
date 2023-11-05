import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [
      { username: 'admin', password: 'admin', role: 'admin' },
      { username: 'user2', password: 'password2', role: 'user' },
    ],
    currentUser: null,
  }),
  actions: {
    checkCredentials(username, password) {
      const user = this.users.find((user) => user.username === username && user.password === password);
      if (user) {
        this.currentUser = user;
        return true;
      }
      return false;
    },
    logout() {
      this.currentUser = null;
    },
  },
});
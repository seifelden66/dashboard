import { defineStore } from 'pinia';
import { useSessionStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    users: [
      { username: 'admin', password: 'admin', role: 'admin' },
      { username: 'user2', password: 'password2', role: 'user' },
      { username: 'user3', password: 'password3', role: 'user' },
      { username: 'user4', password: 'password4', role: 'user' },
      { username: 'user5', password: 'password5', role: 'user' },
      { username: 'user6', password: 'password6', role: 'user' },
      { username: 'user7', password: 'password7', role: 'user' },
      { username: 'user8', password: 'password8', role: 'user' },
      { username: 'user9', password: 'password9', role: 'user' },

    ],
    
    currentUser: null,
    isAuthenticated: false,
  }),
  actions: {
    checkCredentials(username, password) {
      const user = this.users.find((user) => user.username === username && user.password === password);
      if (user) {
        this.currentUser = user;
        this.isAuthenticated = true;
        const userData = { username: user.username, role: user.role };
        const sessionStorageKey = "userData";
        useSessionStorage(sessionStorageKey, userData);
        return true;
      }
      return false;
    },
    logout() {
      this.currentUser = null;
      this.isAuthenticated = false; 
      const sessionStorageKey = "userData";
      useSessionStorage(sessionStorageKey, null);
    },
  },
});
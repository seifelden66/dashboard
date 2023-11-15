// middleware/auth.js
import { useAuthStore } from '~/store/auth';
import { useSessionStorage } from '@vueuse/core';

export default function () {
  const authStore = useAuthStore();

  const sessionStorageKey = "userData";
  const sessionStore = useSessionStorage(sessionStorageKey, {});
  const sessionUserRole = sessionStore.value.username;
  console.log(sessionUserRole?.modelValue)

  if (!authStore.currentUser || authStore.currentUser.role !== "admin" ) {
    return navigateTo('/'); // Redirect to the login page if not an admin
  }
}


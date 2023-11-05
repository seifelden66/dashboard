// middleware/auth.js
import { useAuthStore } from '~/store/auth';

export default function () {
  const authStore = useAuthStore();

  if (!authStore.currentUser || authStore.currentUser.role !== "admin") {
    return navigateTo('/'); // Redirect to the login page if not an admin
  }
}

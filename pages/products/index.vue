<template>
  <div>Session User Role: {{ ll }} {{ gg }}</div>
  <button @click="logout">Logout</button>
</template>

<script setup lang="ts">
import { useAuthStore } from "../../store/auth";
// import { useSessionStorage } from "@vueuse/core";
// const sessionStorageKey = "userData";
// const sessionStore = useSessionStorage(sessionStorageKey, {});
// const sessionUserRole = sessionStore.value.username;
const ll = useAuthStore().currentUser
const gg = useAuthStore().isAuthenticated

const logout = () => {
  useAuthStore().logout();
};
</script>

<style scoped></style>

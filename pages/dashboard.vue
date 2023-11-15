<template lang="pug">
div(class="h-full w-full grid grid-cols-[1fr,9fr] dark:bg-slate-900 dark:text-gray-100 bg-white" )
    div
      Sidebar /
    div
      h1(class="text-center") ATTENDANCE  
      <button @click="logout">Logout</button>
      div(class='mt-5 grid lg:grid-cols-[1.25fr,1fr]')
        Cards2/
        div(class="h-64")
          Bar/
    
</template>

<script setup lang="ts">
import { useAuthStore } from "../store/auth";
definePageMeta({
  middleware: ["auth"],
})

const logout = () => {
  useAuthStore().logout();
};

</script>



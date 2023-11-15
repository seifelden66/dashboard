<script setup>
import { useAuthStore } from "../store/auth";
import * as yup from "yup";
import { useSessionStorage } from "@vueuse/core";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const { defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
});

const authStore = useAuthStore();
const sessionStorageKey = "userData";
const sessionStore = useSessionStorage(sessionStorageKey, {});
console.log(sessionStore.value);

const username = defineComponentBinds("username");

const password = defineComponentBinds("password");

const error = ref(false);

const login = handleSubmit((values) => {
  const success = authStore.checkCredentials(values.username, values.password);
  if (success) {
    const userData = { username: username.value };
    sessionStore.value = userData;

    if (values.username === "admin") {
      authStore.currentUser.role = "admin";
      navigateTo("/dashboard");
    } else {
      authStore.currentUser.role = "user";
      navigateTo("/products");
    }
  } else {
    error.value = true;
  }
});
</script>
<template lang="pug">
Navbar/
div(class="flex items-center justify-center h-[97vh] dark:bg-slate-900 dark:text-gray-100")  
  form(@submit.prevent="login" class="shadow rounded flex flex-col h-64 w-60 pt-4 px-3 gap-4 dark:bg-slate-950 bg-gray-100" )
    InputText(v-bind="username" 
    placeholder="Username" 
    name="username" 
    class="text-gray-500 p-2 dark:bg-slate-900 bg-dark-100" )

    small#email-help.p-error
            | {{ errors.username }}
    InputText(v-bind="password" 
    class="text-gray-500 p-2 dark:bg-slate-900 bg-dark-100"
    placeholder="Password" 
    name="password" 
    type="password" 
     )
    small#email-help.p-error
            | {{ errors.password }}
    button(type="submit") Login
    p(v-show="error" class="text-red-700 mt-4") Invalid credentials


</template>

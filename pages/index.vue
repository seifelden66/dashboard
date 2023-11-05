<script setup>
import { useAuthStore } from "../store/auth";
import * as yup from "yup";


const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const { defineComponentBinds, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
});

const { isDark } = useDarkMode();
const authStore = useAuthStore();


const username = defineComponentBinds("username");

const password = defineComponentBinds("password");


const error = ref(false);

const login = handleSubmit((values) => {
  const success = authStore.checkCredentials(values.username, values.password);
  if (success) {
    if (values.username === "admin") {
      authStore.currentUser.role = "admin"; // Set the role to "admin"
      navigateTo("/dashboard");
    } else {
      authStore.currentUser.role = "user"; // Set the role to "user"
      navigateTo("/products");
    }
  } else {
    error.value = true;
  }
});

</script>
<template lang="pug">
Navbar/
div(class="flex items-center justify-center h-[97vh]" :class="isDark? 'bg-slate-950 text-gray-100':'bg-gray-100 text-slate-950'")  
  form(@submit.prevent="login" class="shadow rounded flex flex-col h-64 w-60 pt-4 px-3 gap-4" :class="isDark? 'bg-slate-900':'bg-white'")
    InputText(v-bind="username" 
    placeholder="Username" 
    name="username" 
    class="text-gray-500 p-2" 
    :class="isDark?'bg-slate-950':'bg-gray-100'" )
    small#email-help.p-error
            | {{ errors.username }}
    InputText(v-bind="password" 
    class="text-gray-500 p-2" 
    placeholder="Password" 
    name="password" 
    type="password" 
    :class="isDark?'bg-slate-950':'bg-gray-100'" )
    small#email-help.p-error
            | {{ errors.password }}
    button(type="submit") Login
    p(v-show="error" class="text-red-700 mt-4") Invalid credentials


</template>

<template lang="pug">
aside(class="w-40 h-[100vh] p-3 py-5 dark:bg-slate-950 dark:text-gray-100 bg-gray-100 text-slate-950" )
    div(class=' flex items-center')
        div(class="w-14 ")
            img(src='/logo.png' class='h-full w-full')
        .container(class="ml-auto")
            label.switch
                input.checkbox(type="checkbox" v-model="isDark")
                span.slider
</template>
<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>
<style scoped>
.container{
    margin-left: auto;
    width: max-content;
}
.switch {
  display: block;
  width: 70px;
  height: 30px;
  position: relative;
}

.checkbox {
  opacity: 0;
  height: 0;
  width: 0;
}

.slider {
  position: absolute;
  inset: 0;
  background-color: #aaa;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  
}

.slider::before {
  position: absolute;
  content: "";
  top: 0px;
  left: 0px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(0);
  transition: all 0.5s ease-out;
}

.checkbox:checked + .slider {
  background-color: green;
}

.checkbox:checked + .slider::before {
  transform: translateX(40px);
}
</style>
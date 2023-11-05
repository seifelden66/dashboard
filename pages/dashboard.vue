<template lang="pug">
div(class="h-full w-full grid grid-cols-[1fr,9fr]" :class="isDark? 'bg-slate-900 text-gray-100':'bg-white text-slate-950'")
    div
      Sidebar /
    div(class='mt-5 grid lg:grid-cols-[1.25fr,1fr]')
      Cards2/
      div(class="h-64")
        Bar/
    
</template>

<script setup lang="ts">
const { isDark } = useDarkMode()  

definePageMeta({
  middleware: ["auth"],
})

</script>



<template lang="pug">
div(:class="isDark? 'bg-slate-900 text-gray-100':'bg-white text-slate-950'" class="p-2")
    .cont(class="flex items-center")
        div(class="w-14 ")
            img(src='/logo.png' class='h-full w-full')
        div(class="ml-auto")
            button(@click="toggle")
                IconsDark

</template>

<script setup lang="ts">
const {isDark} = useDarkMode()
const toggle = ()=>{
    isDark.value = !isDark.value
}
</script>


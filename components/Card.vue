<template lang='pug'>
div(class='p-1 h-36 w-56 rounded-md' :class="isDark ? 'bg-slate-900' : 'bg-white'")
    h3 hello {{name}}

</template>

<script setup lang="ts">
const props = defineProps(['name'])
const {isDark} = useDarkMode()
</script>

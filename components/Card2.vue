<template lang='pug'>
div(class=' p-1 w-56 rounded-md dark:bg-slate-950 dark:text-gray-100 bg-gray-100 text-slate-950')
    h3 {{name}}

</template>

<script setup lang="ts">
const props = defineProps(['name'])

</script>

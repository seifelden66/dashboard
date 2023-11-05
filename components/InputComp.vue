<template>
  <input
    class="rounded p-1 focus:outline-none"
    :class="isDark ? 'bg-slate-950' : 'bg-gray-100'"
    :placeholder="placeholder"
  />
</template>

<script setup>
const { isDark } = useDarkMode();
const props = defineProps({
  placeholder: String,
});
</script>

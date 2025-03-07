<template>
  <button
    type="button"
    class="w-[450px] flex items-center justify-between text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 cursor-pointer"
  >
    <span class="flex items-center gap-1">
      <SeachIcon />
      <span> Buscar... </span>
    </span>

    <span> <kbd>⌘</kbd><kbd>k</kbd> </span>
  </button>
</template>

<script setup lang="ts">
import SeachIcon from "@/icons/SearchIcon.vue";
</script>

<template>
  <form
    class="flex items-center w-full mx-auto"
    @submit.prevent="onSearch"
    :class="classes"
  >
    <label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-white"
      >
        <svg
          class="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        ref="inputRef"
        type="text"
        id="voice-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos, Design Templates..."
        required
      />
      <!-- <button
        type="button"
        class="absolute inset-y-0 end-0 flex items-center pe-3"
      >
        <svg
          class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          />
        </svg>
      </button> -->
    </div>
    <button
      @click="emit('close')"
      type="button"
      class="ms-2 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 cursor-pointer"
    >
      ESC
    </button>
  </form>
</template>

<script setup lang="ts">
import { useSearchStocks } from "@/composables/useSearchStocks";
import { ref } from "vue";

interface Props {
  classes?: string;
}

const { classes } = defineProps<Props>();
const emit = defineEmits(["close"]);
const { inputSearch } = useSearchStocks();

const inputRef = ref<HTMLInputElement | null>(null);

const onSearch = () => {
  if (!inputRef.value) return;
  const { value } = inputRef.value;
  inputSearch.value = value.trim();
};
</script>

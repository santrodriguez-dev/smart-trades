<script lang="ts" setup>
import type { Body } from "@/interfaces/search-stocks";
import { searchMarket } from "@/api/stocks";
import { ref, watch } from "vue";
import { useSearchStocks } from "@/composables/useSearchStocks";

interface Props {
  classes?: string;
}

const { classes } = defineProps<Props>();

const stocks = ref<Body[]>([]);
const error = ref<string | null>(null);
const isLoading = ref<boolean>(false);

const { inputSearch, showSearchModal, selectedStock } = useSearchStocks();

watch(inputSearch, () => {
  if (!inputSearch.value) return;
  getStocks(inputSearch.value);
});

const getStocks = async (search: string) => {
  isLoading.value = true;
  try {
    const stocksReponse = await searchMarket(search);
    stocks.value = stocksReponse.body;
  } catch (err) {
    if (err instanceof Error) error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

const onSelected = (stock: Body) => {
  showSearchModal.value = false;
  selectedStock.value = stock.symbol;
};

// onMounted(() => getStocks());
</script>

<template>
  <section :class="classes">
    <h4 v-if="isLoading">Loading...</h4>
    <h4 v-if="error">{{ error }}</h4>
    <h4 v-if="!error && !isLoading && stocks.length === 0">No stocks</h4>

    <div class="grid grid-cols-3 gap-2">
      <button
        v-for="stock in stocks"
        :key="stock.symbol"
        @click="onSelected(stock)"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      >
        <h5
          class="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white break-words"
        >
          {{ stock.symbol }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ stock.name }}
        </p>
      </button>
    </div>
  </section>
</template>

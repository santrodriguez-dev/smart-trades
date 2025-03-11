<template>
  <h4 v-if="isLoading">Loading...</h4>
  <h4 v-if="error">{{ error }}</h4>

  <div v-if="stockProfileData">
    <h2>{{ selectedStock }}</h2>
    <p>Industry: {{ stockProfileData.industry }}</p>
    <p>{{ stockProfileData.longBusinessSummary }}</p>
  </div>

  <div v-if="stockFinancialData">
    <p>Price {{ stockFinancialData.currentPrice.raw }}</p>
  </div>
</template>

<script setup lang="ts">
import { getFinancialData, getStockProfileData } from "@/api/stocks";
import { useSearchStocks } from "@/composables/useSearchStocks";
import { ref, watch } from "vue";

const stockFinancialData = ref<any>();
const stockProfileData = ref<any>();

const error = ref<string | null>(null);
const isLoading = ref<boolean>(false);

const { selectedStock } = useSearchStocks();

watch(selectedStock, () => {
  if (!selectedStock.value) return;
  getStockProfileAndFinancialData(selectedStock.value);
});

const getStockProfileAndFinancialData = async (selectedStock: string) => {
  isLoading.value = true;
  try {
    const [stockFinancialDataResponse, stockProfileDataResponse] =
      await Promise.allSettled([
        getFinancialData(selectedStock),
        getStockProfileData(selectedStock),
      ]);

    if (stockFinancialDataResponse.status === "fulfilled") {
      stockFinancialData.value = stockFinancialDataResponse.value.body;
      console.log(stockFinancialDataResponse.value);
    }

    if (stockProfileDataResponse.status === "fulfilled") {
      stockProfileData.value = stockProfileDataResponse.value.body;
      console.log(stockProfileDataResponse.value);
    }
  } catch (err) {
    if (err instanceof Error) error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};
</script>

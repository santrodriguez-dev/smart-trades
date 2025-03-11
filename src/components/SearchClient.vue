<script setup>
import { watch } from "vue";
import ButtonSearch from "@/components/ButtonSearch.vue";
import SearchDialog from "./search-dialog/SearchDialog.vue";
import StockData from "./StockData.vue";
import { useSearchStocks } from "@/composables/useSearchStocks";

const { showSearchModal } = useSearchStocks();
</script>

<template>
  <section>
    <ButtonSearch @click="showSearchModal = !showSearchModal" />
    <SearchDialog @close="showSearchModal = false" />
    <StockData />
  </section>
</template>

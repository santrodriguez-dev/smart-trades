<script setup>
import { watch } from "vue";
import ButtonSearch from "./ButtonSearch.vue";
import SearchDialog from "./SearchDialog.vue";
import { useSearchStocks } from "@/composables/useSearchStocks";

const { showSearchModal, selectedStock } = useSearchStocks();

watch(selectedStock, () => {
  console.log(selectedStock.value);
});
</script>

<template>
  <section class="">
    <ButtonSearch @click="showSearchModal = !showSearchModal" />
    <SearchDialog @close="showSearchModal = false" />
    {{ selectedStock }}
  </section>
</template>

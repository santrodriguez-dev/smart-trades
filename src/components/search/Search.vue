<script setup>
import ButtonSearch from "./ButtonSearch.vue";
import SearchDialog from "./SearchDialog.vue";
import { useSearchStocks } from "@/composables/useSearchStocks";

const { showSearchModal, selectedStock } = useSearchStocks();
</script>

<template>
  <section class="">
    <ButtonSearch @click="showSearchModal = !showSearchModal" />
    <SearchDialog @close="showSearchModal = false" />
    {{ selectedStock }}
  </section>
</template>

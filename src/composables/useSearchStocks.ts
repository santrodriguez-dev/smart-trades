import { computed, ref } from "vue"

const inputSearch = ref<string | undefined>() // this is a reactive variable globally available
const showSearchModal = ref(false);
const selectedStock = ref<string>();
export const useSearchStocks = () => {

  return {
    inputSearch,
    showSearchModal,
    selectedStock
  }
}

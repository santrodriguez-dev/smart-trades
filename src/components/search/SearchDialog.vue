<template>
  <Teleport to="body" v-if="isMounted">
    <dialog
      ref="dialogRef"
      class="relative w-full sm:max-w-2xl mt-20 mx-auto rounded shadow-sm bg-gray-700 text-white max-h-[80vh] overflow-y-hidden"
    >
      <div class="flex flex-col gap-0 max-h-[500px]">
        <InputSearch @close="onClose" classes="px-4 py-4" />
        <Stocks classes="flex-1 overflow-auto px-4 pb-4" />
      </div>
    </dialog>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onUnmounted } from "vue";
import InputSearch from "./InputSearch.vue";
import Stocks from "../Stocks.vue";
import { useSearchStocks } from "@/composables/useSearchStocks";

const dialogRef = ref<HTMLDialogElement | null>();
const isMounted = ref(false);
const emit = defineEmits(["close"]);
const { showSearchModal } = useSearchStocks();

onMounted(() => {
  isMounted.value = true;
  document.addEventListener("keydown", onEscapeKey);
});

onUnmounted(() => {
  document.removeEventListener("keydown", onEscapeKey);
});

const onEscapeKey = (e: KeyboardEvent) => {
  if (e.key !== "Escape") return;
  onClose();
  dialogRef.value?.close();
};

watch(showSearchModal, (currentState) => {
  if (currentState) {
    return dialogRef.value?.showModal();
  }
  dialogRef.value?.close();
});

const onClose = () => emit("close"); // onClose
</script>

<style scoped>
@reference "tailwindcss";

dialog::backdrop {
  @apply fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30;
}
</style>

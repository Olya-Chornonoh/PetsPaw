import { getBreeds } from "@/api/breeds/getBreeds";
import { onMounted, ref, unref, watchEffect, type Ref } from "vue";

export function useBreeds(limit: Ref<number>) {
  const breeds = ref([]);
  const isLoading = ref(false);

  function load() {
    isLoading.value = true;

    getBreeds(unref(limit))
      .then((val) => (breeds.value = val))
      .finally(() => (isLoading.value = false));
  }

  onMounted(() => {
    load();
  });

  watchEffect(load);

  return { breeds, isLoading };
}

import { getAllImages } from "@/api/gallery/getAllImages";
import { onMounted, ref, unref, watchEffect, type Ref } from "vue";

export function useGallery(limit: Ref<number>, order: Ref<string>, type: Ref<string>) {
  const gallery = ref([]);
  const isLoading = ref(false);

  function load() {
    isLoading.value = true;

    getAllImages(unref(limit), unref(order), unref(type))
      .then((val) => (gallery.value = val))
      .finally(() => (isLoading.value = false));
  }

  onMounted(() => {
    load();
  });

  watchEffect(load);

  return { gallery, isLoading, load };
}

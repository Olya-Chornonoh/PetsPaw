import { getVotes } from "@/api/vote/getVotes";
import { onMounted, ref } from "vue";

export function useVotes() {
  const votes = ref([]);
  const isLoading = ref(false);

  onMounted(() => {
    isLoading.value = true;

    getVotes()
      .then((val) => (votes.value = val))
      .finally(() => (isLoading.value = false));
  });

  return { votes, isLoading };
}

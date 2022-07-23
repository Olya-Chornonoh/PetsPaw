<template>
  <div v-if="isLoading">Loading....</div>
  <div v-else>
    <div v-for="vote of votes" :key="vote.id">
      {{ vote.image_id }} {{ vote.created_at }} {{ vote.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { useVotes } from "@/composables/useVotes";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const { votes, isLoading } = useVotes();

    return { votes, isLoading };
  },
});
</script>

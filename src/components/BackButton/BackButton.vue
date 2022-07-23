<template>
  <router-link :to="{ name: 'home' }">
    <img
      :src="Left"
      alt="Left"
      class="bg-hovered text-active p-2.5 rounded-[10px] hover:bg-base"
    />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Left from "@/assets/icons/Left.svg";

export default defineComponent({
  setup() {
    return { Left };
  },
});
</script>

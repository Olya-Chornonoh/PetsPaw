<template>
  <h1
    class="bg-active text-base px-[30px] py-2.5 rounded-[10px] font-medium text-xl tracking-[2px]"
  >
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

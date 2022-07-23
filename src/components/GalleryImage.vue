<template>
  <div class="flex flex-col gap-5">
    <div
      v-for="(chunk, index) of imageArray"
      :key="index"
      :class="index % 2 === 0 ? 'grid1' : 'grid2'"
    >
      <div v-for="image of chunk" :key="image.id">
        <img
          :src="image.url"
          alt="cat"
          class="block w-full h-full object-cover rounded-[20px]"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import type { PropType } from "vue";

export default defineComponent({
  props: {
    images: {
      type: Array as PropType<{ id: string; url: string }[]>,
      required: true,
    },
  },
  setup(props) {
    const imageArray = computed(() => {
      const result = [];
      for (let i = 0; i < props.images.length; i += 5) {
        const chunk = props.images.slice(i, i + 5);
        result.push(chunk);
      }
      return result;
    });

    return { imageArray };
  },
});
</script>

<style lang="sass" scoped>
.grid1
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(3, 140px)
  gap: 20px

  > *:nth-child(1)
    grid-row: span 2

  > *:nth-child(4)
    grid-row: span 2
    grid-column: span 2

.grid2
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-template-rows: repeat(3, 140px)
  gap: 20px

  > :nth-child(3)
    grid-row: span 2

  > :nth-child(4)
    grid-row: span 2
    grid-column: span 2
</style>

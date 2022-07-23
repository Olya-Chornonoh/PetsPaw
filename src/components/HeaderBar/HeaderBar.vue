<template>
  <div class="flex gap-2.5">
    <input
      type="text"
      placeholder="Search for breeds by name"
      class="w-full py-[15px] pl-5 bg-base rounded-[20px] active:border-none"
    />
    <button class="ml-[-50px]">
      <img
        :src="Search"
        alt="Search"
        class="p-2.5 rounded-[10px] bg-hovered active:bg-active"
      />
    </button>

    <button>
      <img
        :src="Like"
        alt="Like"
        class="bg-base p-[15px] hover:bg-hovered active:bg-active rounded-[20px]"
      />
    </button>

    <button>
      <img
        :src="Favorite"
        alt="Favorite"
        class="bg-base px-[15px] py-[17px] hover:bg-hovered active:bg-active rounded-[20px]"
      />
    </button>

    <button>
      <img
        :src="Dislike"
        alt="Dislike"
        class="bg-base p-[15px] hover:bg-hovered active:bg-active rounded-[20px]"
      />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Search from "@/assets/icons/Search.svg";
import Like from "@/assets/icons/Like.svg";
import Dislike from "@/assets/icons/Dislike.svg";
import Favorite from "@/assets/icons/Favorite.svg";

export default defineComponent({
  setup() {
    return { Search, Like, Dislike, Favorite };
  },
});
</script>

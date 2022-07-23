<template>
  <div class="flex flex-col gap-5 overflow-y-auto h-full">
    <HeaderBar />

    <div class="flex justify-between px-5">
      <BackButton />

      <PageTitle title="Breeds" />

      <select class="bg-grey rounded-[10px] px-2.5">
        <option value="breeds" class="font-normal pt-2.5 px-5 text-tx">
          All breeds
        </option>
        <option value="abyssinian" class="font-normal pt-2.5 px-5 text-tx">
          Abyssinian
        </option>
        <option value="aegean" class="font-normal pt-2.5 px-5 text-tx">
          Aegean
        </option>
        <option value="bobtail" class="font-normal pt-2.5 px-5 text-tx">
          American Bobtail
        </option>
        <option value="curl" class="font-normal pt-2.5 px-5 text-tx">
          American Curl
        </option>
        <option value="shorthair" class="font-normal pt-2.5 px-5 text-tx">
          American Shorthair
        </option>
        <option value="wirehair" class="font-normal pt-2.5 px-5 text-tx">
          American Wirehair
        </option>
      </select>

      <select class="bg-grey rounded-[10px] px-2.5" v-model="limit">
        <option value="5" class="font-normal pt-2.5 px-5 text-tx">
          Limit: 5
        </option>
        <option value="10" class="font-normal pt-2.5 px-5 text-tx">
          Limit: 10
        </option>
        <option value="15" class="font-normal pt-2.5 px-5 text-tx">
          Limit: 15
        </option>
        <option value="20" class="font-normal pt-2.5 px-5 text-tx">
          Limit: 20
        </option>
      </select>
      <button>
        <img
          :src="SortingUp"
          alt="Sorting from Z to A"
          class="bg-grey p-2.5 rounded-[10px]"
        />
      </button>
      <button>
        <img
          :src="SortingDown"
          alt="Sorting from A to Z"
          class="bg-grey p-2.5 rounded-[10px]"
        />
      </button>
    </div>

    <div v-if="isLoading">Loading....</div>

    <div class="overflow-y-auto" v-else>
      <GalleryImage :images="breeds" />
    </div>
  </div>
</template>

<script lang="ts">
import { useBreeds } from "@/composables/useBreeds";
import { defineComponent, ref } from "vue";

import BackButton from "../components/BackButton/BackButton.vue";
import PageTitle from "../components/PageTitle/PageTitle.vue";

import SortingUp from "@/assets/icons/SortingUp.svg";
import SortingDown from "@/assets/icons/SortingDown.svg";
import HeaderBar from "../components/HeaderBar/HeaderBar.vue";
import GalleryImage from "../components/GalleryImage.vue";

export default defineComponent({
  setup() {
    const limit = ref(5);
    const { breeds, isLoading } = useBreeds(limit);

    return { breeds, isLoading, SortingUp, SortingDown, limit };
  },
  components: { BackButton, PageTitle, HeaderBar, GalleryImage },
});
</script>

<template>
  <div class="flex flex-col gap-5 overflow-y-auto h-full">
    <HeaderBar />

    <div class="flex justify-between">
      <div class="flex gap-2.5 items-center">
        <BackButton />

        <PageTitle title="Gallery" />
      </div>
      <button
        class="flex gap-2.5 px-[30px] py-3 bg-hovered text-active rounded-[10px] text-xs tracking-[2px]"
      >
        <img :src="Upload" alt="upload" />
        Upload
      </button>
    </div>

    <div
      class="grid grid-cols-2 grid-rows-2 bg-grey rounded-[20px] pt-2.5 px-5 pb-5 gap-x-5 gap-y-2.5"
    >
      <div>
        <h1 class="text-tx font-medium text-xs">ORDER</h1>
        <select
          class="bg-base rounded-[10px] px-2.5 w-full py-2"
          v-model="order"
        >
          <option
            value="random"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            Random
          </option>
          <option value="desc" class="font-normal bg-base pt-2.5 px-5 text-tx">
            Desc
          </option>
          <option value="asc" class="font-normal bg-base pt-2.5 px-5 text-tx">
            Asc
          </option>
        </select>
      </div>

      <div>
        <h1 class="text-tx font-medium text-xs">TYPE</h1>
        <select
          class="bg-base rounded-[10px] px-2.5 w-full py-2"
          v-model="type"
        >
          <option value="all" class="font-normal bg-base pt-2.5 px-5 text-tx">
            All
          </option>
          <option
            value="static"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            Static
          </option>
          <option
            value="animated"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            Animated
          </option>
        </select>
      </div>

      <div>
        <h1 class="text-tx font-medium text-xs">BREED</h1>
        <select class="bg-base rounded-[10px] px-2.5 w-full py-2">
          <option value="none" class="font-normal bg-base pt-2.5 px-5 text-tx">
            None
          </option>
          <option
            value="abyssinian"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            Abyssinian
          </option>
          <option
            value="bengal"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            Bengal
          </option>
          <option value="agean" class="font-normal bg-base pt-2.5 px-5 text-tx">
            Agean
          </option>
          <option
            value="bobtail"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            American Bobtail
          </option>
          <option
            value="shorthair"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            American Shorthair
          </option>
          <option
            value="wirehair"
            class="font-normal bg-base pt-2.5 px-5 text-tx"
          >
            American Wirehair
          </option>
        </select>
      </div>

      <div>
        <h1 class="text-tx font-medium text-xs">LIMIT</h1>
        <div class="flex gap-2.5">
          <select
            class="bg-base rounded-[10px] px-2.5 w-full py-2"
            v-model="limit"
          >
            <option value="5" class="font-normal bg-base pt-2.5 px-5 text-tx">
              5 items per page
            </option>
            <option value="10" class="font-normal bg-base pt-2.5 px-5 text-tx">
              10 items per page
            </option>
            <option value="15" class="font-normal bg-base pt-2.5 px-5 text-tx">
              15 items per page
            </option>
            <option value="20" class="font-normal bg-base pt-2.5 px-5 text-tx">
              20 items per page
            </option>
          </select>
          <button @click="refreshOn">
            <img
              :src="Refresh"
              alt="refresh"
              class="bg-base py-2.5 px-[11px] rounded-[10px] hover:bg-hovered active:bg-active"
            />
          </button>
        </div>
      </div>
    </div>

    <div v-if="isLoading">Loading....</div>

    <div class="overflow-y-auto" v-else>
      <GalleryImage :images="gallery" />
    </div>
  </div>
</template>

<script lang="ts">
import { useGallery } from "@/composables/useGallery";
import { defineComponent, ref } from "vue";

import Upload from "@/assets/icons/Upload.svg";
import Refresh from "@/assets/icons/Refresh.svg";
import BackButton from "../components/BackButton/BackButton.vue";
import PageTitle from "../components/PageTitle/PageTitle.vue";
import HeaderBar from "../components/HeaderBar/HeaderBar.vue";
import GalleryImage from "../components/GalleryImage.vue";

export default defineComponent({
  setup() {
    const limit = ref(5);
    const order = ref("random");
    const type = ref("all");

    const { gallery, isLoading, load } = useGallery(limit, order, type);

    function refreshOn() {
      load();
    }

    return {
      gallery,
      isLoading,
      Upload,
      Refresh,
      refreshOn,
      limit,
      order,
      type,
    };
  },
  components: { BackButton, PageTitle, HeaderBar, GalleryImage },
});
</script>

<template>
  <div class="grid grid-rows-[24px_100px_1fr] mt-[30px] mx-auto">
    <div class="flex gap-x-2">
      <img src="public/logo/logo.png" alt="PetsPaw" />
      <h1 class="home-header-title">PetsPaw</h1>
    </div>

    <div class="flex flex-col gap-2.5 mt-20">
      <h1 class="home-title text-4xl font-medium">Hi intern!</h1>
      <p class="home-subtitle font-normal text-xl">
        Welcome to MI 2022 Front-end test
      </p>
    </div>

    <div class="m-auto flex flex-col gap-5">
      <p class="text-xl font-medium home-title">Lets start using The Cat API</p>

      <div class="flex items-center gap-4">
        <div>
          <router-link
            :to="{ name: 'voting' }"
            class="flex flex-col items-stretch gap-2.5"
          >
            <img src="home/check.png" alt="voting" class="active:bg-hovered" />
            <span
              class="px-[30px] text-center rounded-[10px] hover:bg-hovered hover:text-hover active:bg-active active:text-base font-medium text-xs letterSpacing-tightest text-hover py-2.5 text-center"
            >
              VOTING
            </span>
          </router-link>
        </div>

        <div>
          <router-link
            :to="{ name: 'breeds' }"
            class="flex flex-col items-stretch gap-2.5"
          >
            <img src="home/cat.png" alt="breeds" class="active:bg-hovered" />
            <span
              class="px-[30px] text-center rounded-[10px] hover:bg-hovered hover:text-hover active:bg-active active:text-base font-medium text-xs letterSpacing-tightest text-hover py-2.5 text-center"
            >
              BREEDS
            </span>
          </router-link>
        </div>

        <div>
          <router-link
            :to="{ name: 'gallery' }"
            class="flex flex-col items-stretch gap-2.5"
          >
            <img src="home/phone.png" alt="gallery" class="active:bg-hovered" />
            <span
              class="px-[30px] text-center rounded-[10px] hover:bg-hovered hover:text-hover active:bg-active active:text-base font-medium text-xs letterSpacing-tightest text-hover py-2.5 text-center"
            >
              GALLER
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.home-header-title {
  color: #1d1d1d;
}
</style>

<template>
  <div class="flex h-screen bg-app p-[30px]">
    <AppNavigation />

    <div class="w-2/4 rounded-[20px] p-5 bg-base">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavigation from "./components/AppNavigation/AppNavigation.vue";
</script>

<style scoped></style>

import Breeds from "@/views/BreedsView.vue";
import Gallery from "@/views/GalleryView.vue";
import Home from "@/views/HomeView.vue";
import Voting from "@/views/VotingView.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/voting",
      name: "voting",
      component: Voting,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/breeds",
      name: "breeds",
      component: Breeds,
    },
  ],
});

export default router;

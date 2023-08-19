import { createRouter, createWebHistory } from "vue-router";
// components
import Landing from "@/pages/Landing.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});

  function login() {}

  function logout() {}

  function enable2Factor() {}

  return { user, login, logout, enable2Factor };
});

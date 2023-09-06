import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});

  function signup({ username, password }) {}

  function login({ username, password }) {}

  function logout() {}

  function enable2Factor() {}

  return { user, signup, login, logout, enable2Factor };
});

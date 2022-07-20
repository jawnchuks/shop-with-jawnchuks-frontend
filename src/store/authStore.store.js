import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import { authStoreName, authStoreVersion } from "@config/index";

let AuthStore = (set) => ({
  isAuthenticated: false,
  userDetails: null,

  populateUserInfoAndJwt: (payload) => {
    set(() => ({
      userDetails: payload,
      isAuthenticated: true,
    }));
  },

  refreshUserInfo: (payload) => {
    set(() => ({
      userDetails: payload,
    }));
  },

  reset: () => {
    set(() => ({ userDetails: null, isAuthenticated: false }));
  },
});

AuthStore = devtools(AuthStore);

AuthStore = persist(AuthStore, {
  name: authStoreName,
  version: authStoreVersion,
});

export const useUserCredentialsStore = create(AuthStore);

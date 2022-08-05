import create from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create()(
  devtools((set) => ({
    router: null,
    setRouter: (router) =>
      set((state) => ({
        ...state,
        router,
      })),
  }))
);

export default useStore;
import create from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addToScore: (amount: number) => void;
};

export const useAppShell = create(
  persist<Store>(
    (set) => ({
      user: null,
      score: 0,
      setUser: (user) => set(() => ({ user })),
      addToScore: (amount) =>
        set((state: Store) => ({ score: state.score + amount })),
    }),
    {
      name: "app-shell",
    }
  )
);

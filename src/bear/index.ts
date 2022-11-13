import { theme } from "styles";
import create from "zustand";

interface BearState {
  background: string;
  setBackground: (color: string) => void;
}

export const useBearStore = create<BearState>((set) => ({
  background: theme.color.green,
  setBackground: (color) => set(() => ({ background: color })),
}));

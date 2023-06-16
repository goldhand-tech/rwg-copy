import { create } from "zustand";

interface GameQuery {
  genre?: number;
  platform?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (x: number) => void;
  setPlatform: (x: number) => void;
  setOrder: (x: string) => void;
  setSearchText: (x: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),

  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;

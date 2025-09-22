import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Density = "comfortable" | "compact";

interface UIPreferencesState {
  sidebarOpen: boolean;
  density: Density;
  reducedMotion: boolean;
  // setters
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setDensity: (d: Density) => void;
  setReducedMotion: (v: boolean) => void;
}

export const useUIPreferences = create<UIPreferencesState>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      density: "comfortable",
      reducedMotion: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setDensity: (d) => set({ density: d }),
      setReducedMotion: (v) => set({ reducedMotion: v }),
    }),
    {
      name: "ui-prefs",
      // `createJSONStorage` is a Zustand utility that adapts a raw storage
      // (localStorage, sessionStorage, etc. → which only handle strings)
      // into a JSON-ready storage: it automatically serializes/deserializes objects
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        sidebarOpen: state.sidebarOpen,
        density: state.density,
        reducedMotion: state.reducedMotion,
      }),
      version: 1,
      // migrate: (persisted, version) => persisted
      // Optional migration function:
      // Used when you bump the version number.
      // It receives the old persisted state and its version,
      // and should return the new state in the updated shape.
      // Example:
      // migrate: (persisted, version) => {
      //   if (version === 1) {
      //     return { ...persisted, density: "comfortable" };
      //   }
      //   return persisted;
      // },
    },
  ),
);

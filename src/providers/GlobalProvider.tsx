"use client";

import { useState, useContext, createContext } from "react";

const GlobalContext = createContext<{
  showSplash: boolean;
  setShowSplash: (value: boolean) => void;
}>({
  showSplash: true,
  setShowSplash: () => {},
});

export function GlobalProvider({ children }: React.PropsWithChildren) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <GlobalContext.Provider
      value={{ showSplash, setShowSplash: (value) => setShowSplash(value) }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }
  return context;
}

import React from "react";
import { IStore } from "@/models";
import { createContext, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type StoreContext = {
  store: IStore | null;
  setStore: (store: IStore) => void;
};
const StoreContext = createContext<StoreContext>({
  store: null,
  setStore: () => {},
});

export const useStore = () => useContext(StoreContext);

function StoreProvider({ children }: ProviderProps) {
  const [store, setStore] = useState<IStore | null>(null);

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;

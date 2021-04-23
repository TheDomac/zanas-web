import React, { useState, createContext } from "react";

import { screens } from "consts/screens";

export const SelectedScreenContext = createContext({
  selectedScreen: null,
  setSelectedScreen: (s: any) => s,
});

const SelectedScreenProvider = ({ children }: any) => {
  const [selectedScreen, setSelectedScreen] = useState<string | null>(
    screens.NONE
  );

  const value: any = { selectedScreen, setSelectedScreen };

  return (
    <SelectedScreenContext.Provider value={value}>
      {children}
    </SelectedScreenContext.Provider>
  );
};

export default SelectedScreenProvider;

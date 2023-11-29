'use client';

import { PaletteMode, useMediaQuery } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type colorModeContextType = {
  toggleColorMode: () => void;
  mode: PaletteMode;
};

type Props = {
  children: ReactNode;
};

const colorModeContextDefaultValues = {
  toggleColorMode: () => {},
  mode: 'light' as PaletteMode
};

const ColorModeContext = createContext<colorModeContextType>(
  colorModeContextDefaultValues
);

const useColorMode = () => {
  return useContext(ColorModeContext);
};

function ColorModeProvider({ children }: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );
  const value = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
}

export { useColorMode, ColorModeProvider };

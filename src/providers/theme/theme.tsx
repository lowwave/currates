import React, { useCallback, useMemo } from 'react';

import { ThemeProvider } from 'styled-components';

import { useLocalStorage } from '@/hooks/use-local-storage';

import { dark, light } from './theme-tokens';

type ThemeTypeT = 'light' | 'dark';
type ThemeContextT = {
  theme: ThemeTypeT;
  toggleTheme: () => void;
};

const themesMap = {
  dark,
  light,
} as const;

const ThemeContextDefaultValues: ThemeContextT = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemePreferenceContext = React.createContext<ThemeContextT>(
  ThemeContextDefaultValues,
);

export const ThemePreferenceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeTypeT>(
    'themePreference',
    'light',
  );

  const theme = useMemo(() => {
    return currentTheme in themesMap
      ? themesMap[currentTheme]
      : themesMap.light;
  }, [currentTheme]);

  const toggleTheme = useCallback(() => {
    const isDarkMode = currentTheme === 'dark';
    if (isDarkMode) {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('dark');
    }
  }, [currentTheme, setCurrentTheme]);

  const contextValue = React.useMemo(
    () => ({
      theme: currentTheme,
      toggleTheme,
    }),
    [currentTheme, toggleTheme],
  );

  return (
    <ThemePreferenceContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};

export const useThemePreference = (): ThemeContextT => {
  const context = React.useContext(ThemePreferenceContext);

  if (context === undefined) {
    throw new Error(
      'useThemePreference must be used within a ThemePreferenceProvider',
    );
  }

  return context;
};

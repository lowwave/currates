import { useContext } from 'react';

import { ThemeContextT, ThemePreferenceContext } from './theme';

export const useThemePreference = (): ThemeContextT => {
  const context = useContext(ThemePreferenceContext);

  if (context === undefined) {
    throw new Error(
      'useThemePreference must be used within a ThemePreferenceProvider',
    );
  }

  return context;
};

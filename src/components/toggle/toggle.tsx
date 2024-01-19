import { useThemePreference } from '@/providers/theme/theme';

import { ToggleButton, ToggleContainer } from './toggle.styled';

const SunIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 20"
  >
    <path
      stroke="#212529"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"
    />
  </svg>
);

export const Toggle = () => {
  const { theme, toggleTheme } = useThemePreference();
  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleTheme}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </ToggleButton>
    </ToggleContainer>
  );
};
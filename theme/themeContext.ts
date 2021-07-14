import { createContext } from 'react';

const defaultValue = {
  theme: 'light',
  toggleTheme() {},
};

export const ThemeContext = createContext(defaultValue);

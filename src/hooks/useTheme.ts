import { useEffect, useState } from 'react';

import { ThemeVariantType } from 'src/types/theme';

const useTheme = (
  defaultTheme: ThemeVariantType = 'light',
): { theme: ThemeVariantType; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<ThemeVariantType>(defaultTheme);
  const toggleTheme = () => {
    if (theme !== 'dark') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as ThemeVariantType;

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme: 'light',
    toggleTheme,
  };
};

export default useTheme;

import { useEffect, useState } from 'react';

type TypeTheme = 'light' | 'dark';

const useTheme = (): { theme: TypeTheme; toggleTheme: () => void } => {
  const [theme, setTheme] = useState<TypeTheme>('light');
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
    const localTheme = localStorage.getItem('theme') as TypeTheme;

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;

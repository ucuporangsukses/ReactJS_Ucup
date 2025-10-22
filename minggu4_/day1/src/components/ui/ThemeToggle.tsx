import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button'; // sesuaikan path kalau beda
import { ssrExportNameKey } from 'vite/module-runner';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  );
};


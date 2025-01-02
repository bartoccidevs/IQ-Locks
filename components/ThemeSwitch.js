'use client';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <p className='text-start'>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </p>
    </button>
  );
}
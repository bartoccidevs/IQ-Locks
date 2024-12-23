/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-text': 'var(--theme-text)',
        'theme-text-dark': 'var(--theme-text-dark)',
        'theme-text-contrast': 'var(--theme-text-contrast)',
        'theme-background': 'var(--theme-background)',
        'theme-background-dark': 'var(--theme-background-dark)',
        'theme-primary': 'var(--theme-primary)',
        'theme-primary-dark': 'var(--theme-primary-dark)',
        'theme-secondary': 'var(--theme-secondary)',
        'theme-secondary-dark': 'var(--theme-secondary-dark)',
        'theme-accent': 'var(--theme-accent)',
        'theme-accent-dark': 'var(--theme-accent-dark)',
        'theme-form': 'var(--theme-form)',
        'theme-form-dark': 'var(--theme-form-dark)',
      },
      fontSize: {
        '3.5xl': '2rem'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
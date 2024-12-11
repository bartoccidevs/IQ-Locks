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
        'theme-text-contrast': 'var(--theme-text-contrast)',
        'theme-background': 'var(--theme-background)',
        'theme-primary': 'var(--theme-primary)',
        'theme-secondary': 'var(--theme-secondary)',
        'theme-accent': 'var(--theme-accent)',
        'theme-form': 'var(--theme-form)',
      },
      fontSize: {
        '3.5xl': '2rem'
      }
    },
  },
  plugins: [],
};
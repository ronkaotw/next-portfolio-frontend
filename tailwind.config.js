/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#1484f5',
      secondary: '#FFFFFF',
      white: '#FFFFFF',
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
      },
      gray: {
        600: '#4b5563',
        700: '#374151',
        900: '#111827',
      },
      slate: {
        100: '#f1f5f9',
        300: '#cbd5e1',
      },
    },
    extend: {
      spacing: {
        'section-gap': '2.5rem',
        'section-gap-lg': '9rem',
      },
      fontSize: {
        'heading-lg': ['50px', { lineHeight: '1.2' }],
        'heading-sm': ['30px', { lineHeight: '1.2' }],
        'body': ['15px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};

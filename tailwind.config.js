/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark Slate (Text/Background)
        accent: '#2563EB',  // Electric Blue (Buttons/Links)2563EB
        light: '#F8FAFC',   // Off-white background
        dark: '#1E293B',    // Darker background for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],

  extend: {
    backgroundSize: {
      'size-200': '200% 200%',
    },
    animation: {
      'gradient-x': 'gradient-x 3s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
        },
        '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
        },
      },
    },
  },
}
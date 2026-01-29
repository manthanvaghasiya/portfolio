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
        accent: '#2563EB',  // Electric Blue (Buttons/Links)
        'accent-glow': '#3B82F6', // Lighter Blue for hover states
        light: '#F8FAFC',   // Off-white background
        dark: '#1E293B',    // Darker background for cards
        'bg-card': '#1E293B', // Dark card background for modals/cards
        'text-main': '#F8FAFC', // Main text color for dark backgrounds
        'text-muted': '#94a3b8', // Muted text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
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
  },
  plugins: [],
}
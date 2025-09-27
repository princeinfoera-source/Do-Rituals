/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        // Existing Keyframes
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(-10px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },

        // New Keyframes for Modal/Overlay
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        zoomIn: { 
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      },
      animation: {
        // Existing Animations
        fadeSlideIn: "fadeSlideIn 0.3s ease-out forwards",
        slideDown: "slideDown 0.35s ease-out forwards",
        
        // New Animations for Modal/Overlay
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        // Added a slight 'bounce' effect with cubic-bezier for a snappier modal open
        zoomIn: 'zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards', 
      },
      // Added a specific z-index for the modal to ensure it's on top of everything
      zIndex: {
        '100': '100', 
      }
    },
  },
  plugins: [],
};
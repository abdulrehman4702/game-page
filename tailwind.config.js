/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#f8fafc',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          green: '#10b981',
          orange: '#f59e0b',
        },
        text: {
          primary: '#1e293b',
          secondary: '#64748b',
          light: '#94a3b8',
        },
        card: {
          bg: '#ffffff',
          shadow: 'rgba(0, 0, 0, 0.1)',
        },
        border: {
          light: '#e2e8f0',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-2': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
        'gradient-3': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        'gradient-bg': 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 40%, #fff7ed 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'scroll-up': 'scrollUp 20s linear infinite',
        'scroll-down': 'scrollDown 20s linear infinite',
        'ambient-float': 'ambientFloat 16s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.6s ease-out 0.2s forwards',
        'scroll-up': 'scrollUp 20s linear infinite',
        'scroll-down': 'scrollDown 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        ambientFloat: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '50%': { transform: 'translateY(-8px) translateX(6px)', opacity: '0.92' },
          '100%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}

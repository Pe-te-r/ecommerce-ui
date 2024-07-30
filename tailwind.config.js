/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ['Bree Serif', 'serif'],
      },
      colors: {
        customBlue: '#09D4EB',
        customLogin: '#08CD19',
        customYellow: 'rgba(242, 230, 31, 0.8)', 
        customBtn: "#1687F7",
        customHome: '#BE8BF7',
      },
    },
  },
  plugins: [],
}

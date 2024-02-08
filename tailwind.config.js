/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        "table-header": 'inset 0 1px 0 #DEE8EF, inset 0 -1px 0 #DEE8EF, 1px 0 0 #DEE8EF'
      },
      colors: {
        "lib-blue": {
          "100": "#F4F9FD",
          "200": "#E4F3FF",
          "300": "#C1E4FD",
          "400": "#8AC7F2",
          "500": "#4FAAEA",
          "600": "#3C91F2",
          "700": "#0278FF",
          "800": "#004FA8"
        },
        "lib-green": {
          "100": "#DFFCF5",
          "200": "#C9F1E8",
          "300": "#A3E2D4",
          "400": "#7CCEBC",
          "500": "#59B7A2",
          "600": "#269B82",
          "700": "#0B8067",
          "800": "#005341"
        },
        "lib-grey": {
          "100": "#F8FAFC",
          "200": "#DEE8EF",
          "300": "#C6D3DE",
          "400": "#8DA4B9",
          "500": "#637C90",
          "600": "#3A586F",
          "700": "#2A475D",
          "800": "#193044"
        },
        "lib-red": {
          "100": "#FDD6E2",
          "200": "#F5B5C1",
          "300": "#E094A2",
          "400": "#CC6E80",
          "500": "#BC3F55",
          "600": "#A81C35",
          "700": "#83091F",
          "800": "#580010"
        },
        "lib-yellow": {
          "100": "#FDEFD6",
          "200": "#F7E2BE",
          "300": "#F2D39E",
          "400": "#E2B76C",
          "500": "#CB9942",
          "600": "#A86C03",
          "700": "#964C1F",
          "800": "#622500"
        }
      }
    },
  },
  plugins: [],
}


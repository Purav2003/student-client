/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primaryBg: "#f8f4ee",
          secondaryBg: "#000000",
          containerBg: "#ffffff",
          primaryText: "#000000",
          secondaryText: "#ffffff",
          label: "#52525c",
        },
      },
    },
    plugins: [],
  };
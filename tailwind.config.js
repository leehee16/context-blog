const typography = require('@tailwindcss/typography');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: { color: theme('colors.blue.600') },
            // 필요시 더 커스텀
          },
        },
        invert: {
          css: {
            color: theme('colors.gray.200'),
            a: { color: theme('colors.blue.400') },
            // 필요시 더 커스텀
          },
        },
      }),
    },
  },
  plugins: [typography],
};

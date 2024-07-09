import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme: (arg0: string) => any) => ({
        white: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
            h1: { color: theme('colors.white') },
            h2: { color: theme('colors.white') },
            h3: { color: theme('colors.white') },
            h4: { color: theme('colors.white') },
            h5: { color: theme('colors.white') },
            h6: { color: theme('colors.white') },
            strong: { color: theme('colors.white') },
            blockquote: {
              color: theme('colors.white'),
              borderLeftColor: theme('colors.gray.700'),
            },
            code: { color: theme('colors.white') },
            '::before': { color: theme('colors.white') },
            '::after': { color: theme('colors.white') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
export default config;

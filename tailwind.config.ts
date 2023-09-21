import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "veryPeri": "#6667AB",
        "livingCoral": "#ff6f61",
        "heavyPeri": "#6768ab",
        "lightCoral": "#fc8b79",
      },
      animation: {
        fadeOut: 'fadeOut 1s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },

    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    // require("flowbite/plugin")
  ],
}
export default config

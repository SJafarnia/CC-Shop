
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
      }
      ,
      fontFamily: {
        montserrat : "var(--font-montserrat)",
        roboto: "var(--font-roboto)"
      }
      ,
      colors: {
        "veryPeri": "#6667AB",
        "livingCoral": "#EA6759",
        "heavyPeri": "#6768ab",
        "lightCoral": "#F88F58",
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

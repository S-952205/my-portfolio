import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /*container: Centers your content and adds padding for a nicer layout.
        colors: Adds a custom color (accent) to use in your project. */
        container : {
        center: true,
        padding: "15px"
      },
      colors : {
       accent: "08E95E"
      },
    },
  },
  plugins: [],
} satisfies Config;

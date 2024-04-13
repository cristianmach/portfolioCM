import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#787FF6",
        darkBg: "#131424",
        white: '#ffffff',
      },
      backgroundImage: {
       "gradient-cover": 
        "linear-gradient(90.21deg, rgba(13, 13, 13, 5) 5.91%, rgba(3, 63, 204, 2) 111.58%)" //color para el background
       
      },
    },
  },
  plugins: [],
};
export default config;

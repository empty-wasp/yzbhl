// @ts-nocheck
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      u2xl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      uxl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      ulg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      umd: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      usm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["EW sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

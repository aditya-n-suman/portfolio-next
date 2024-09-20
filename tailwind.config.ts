import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: "var(--green)",
      "green-tint": "var(--green-tint)",
      pink: "var(--pink)",
      white: "var(--white)",
      blue: "var(--blue)",
      navy: {
        DEFAULT: "var(--navy)",
        dark: "var(--dark-navy)",
        light: "var(--light-navy)",
        lightest: "var(--lightest-navy)",
        shadow: "var(--navy-shadow)",
      },
      slate: {
        DEFAULT: "var(--slate)",
        dark: "var(--dark-slate)",
        light: "var(--light-slate)",
        lightest: "var(--lightest-slate)",
      },
    },
    listStyleType: {
      zero: "decimal-leading-zero",
    },
    zIndex: {
      0: "0",
      1: "1",
      2: "2",
      10: "10",
      11: "11",
    },
    fontSize: {
      xxs: "var(--fz-xxs)",
      xs: "var(--fz-xs)",
      sm: "var(--fz-sm)",
      md: "var(--fz-md)",
      lg: "var(--fz-lg)",
      xl: "var(--fz-xl)",
      xxl: "var(--fz-xxl)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        "1px": "1px",
      },
      borderRadius: {
        1.5: "4px",
      },
      height: {
        tab: "var(--tab-height)",
        nav: "var(--nav-height)",
        "90px": "var(--fz-90px)",
        75: "300px",
      },
      width: {
        tab: "var(--tab-width)",
        "30px": "var(--hamburger-width)",
        "1px": "var(--fz-1px)",
      },
      translate: {
        1.5: "6px",
        "2px": "2px",
        2.5: "2.5px",
        "3px": "3px",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      lineHeight: {
        4.5: "18px",
      },
      padding: {
        25: "100px",
      },
    },
  },
  plugins: [],
};

export default config;

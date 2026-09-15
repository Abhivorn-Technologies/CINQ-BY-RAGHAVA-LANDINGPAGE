import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep Burgundy / Wine family (#3A0714)
          wine: "#3A0714",
          wineDark: "#28050E",
          wineDeep: "#1C0308",
          wineLight: "#4E0C1D",
          wineCard: "#320611",

          // Warm Creams & Light Ivories
          cream: "#F4E9D8",
          creamSoft: "#EFE3D0",
          creamBorder: "#E2D3BE",
          ivory: "#FAF7F1",
          ivorySoft: "#F3ECE1",
          ivoryBorder: "#E5DAC8",
          beige: "#E5C9A6",

          // Champagne Gold Accents (#C9A46A)
          gold: "#C9A46A",
          goldLight: "#DFC397",
          goldDim: "#9A7844",
          goldMuted: "#B8965E",

          // Charcoal & Dark Neutrals (#171315)
          charcoal: "#171315",
          charcoalSoft: "#241F22",
          darkMuted: "#7E6E72",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      letterSpacing: {
        "widest-plus": "0.25em",
        "super-wide": "0.35em",
      },
      boxShadow: {
        "gold-glow": "0 0 25px -5px rgba(201, 164, 106, 0.35)",
        "gold-subtle": "0 4px 20px -2px rgba(201, 164, 106, 0.18)",
        "luxury": "0 20px 40px -15px rgba(23, 19, 21, 0.5)",
        "card-light": "0 10px 30px -10px rgba(58, 7, 20, 0.08)",
      },
      borderColor: {
        "gold-subtle": "rgba(201, 164, 106, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

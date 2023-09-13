// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      brand: {
        dark: "#0F0D13",
        blue: "#2375F0",
        pink: "#F41E92",
        liteorange: "#F8EFE2",
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        // brand: "Roboto",
        brand: [
          {
            name: "Roboto",
            weights: ["100", "300", "400", "500", "700", "800"],
            italic: true,
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives()],
});

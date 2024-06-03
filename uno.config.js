import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno({
      preflight: false,
      // prefix: 'lt-',
    }),
    presetWebFonts({
      fonts: {
        // define self font

        // Montserrat: {
        //   name: 'Montserrat',
        //   weights: [400, 700],
        // },
        // KaushanScript: {
        //   name: 'Kaushan Script',
        //   weights: [400, 700],
        // },
      },
    }),
    presetIcons({
      collections: {
        custom: {
          // define self svg
        },
      },
    }),
  ],
})

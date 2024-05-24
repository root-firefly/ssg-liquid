import { defineConfig, presetUno, presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetUno({
      preflight: false,
      prefix: 'lt-',
    }),
    presetWebFonts({
      fonts: {
        KaushanScript: {
          name: 'Kaushan Script',
          weights: [400, 700],
        },
      },
    }),
    presetIcons({
      collections: {
        custom: {
          shuoming: '<svg t="1716451809508" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1725" width="200" height="200"><path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.58 448-448S759.42 64 512 64z m0 832c-212.08 0-384-171.92-384-384s171.92-384 384-384 384 171.92 384 384-171.92 384-384 384z" p-id="1726"></path><path d="M512 304a32 32 0 1 0 32 32 32 32 0 0 0-32-32z m0 96a32 32 0 0 0-32 32v256a32 32 0 0 0 64 0V432a32 32 0 0 0-32-32z" p-id="1727"></path></svg>',
        },
      },
    }),
  ],
})

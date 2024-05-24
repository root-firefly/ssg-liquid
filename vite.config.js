import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueSchema from '@rfirefly/vite-plugin-schema'
import { createHtmlPlugin } from 'vite-plugin-html'
import UnoCSS from 'unocss/vite'

const config = defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.')
  const containerId = `${env.VITE_APP_PREFIX}${env.VITE_APP_NAME}`
  return {
    base: './',
    plugins: [
      Vue(),
      VueSchema(),
      UnoCSS(),
      createHtmlPlugin({
        filename: 'index.html',
        entry: 'src/main.js',
        inject: {
          tags: [
            {
              injectTo: 'body-prepend',
              tag: 'div',
              attrs: {
                id: containerId,
              },
            },
          ],
        },
      }),
    ],
    ssgOptions: {
      script: 'async',
      formatting: 'prettify',
      rootContainerId: containerId,
      crittersOptions: false,
      liquid: true,
      replaceDir: env.VITE_REPLACE_PATH,
      entry: 'src/main.js',
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import \'@/assets/response.scss\';',
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('@vue'))
              return 'vue'
            if (id.includes('node_modules'))
              return 'others'
          },
          chunkFileNames: `lt-chunk-[name].js`,
          entryFileNames: `${env.VITE_APP_PREFIX}[name].js`,
          assetFileNames: `${env.VITE_APP_PREFIX}[name].[ext]`,
        },
      },
    },
  }
})

export default config

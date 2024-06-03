import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueSchema from '@rfirefly/vite-plugin-schema'
import { createHtmlPlugin } from 'vite-plugin-html'
import UnoCSS from 'unocss/vite'
import cdn from 'vite-plugin-cdn-import'

const config = defineConfig(({ mode, isSsrBuild }) => {
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
              injectTo: 'head',
              tag: 'script',
              attrs: {
                href: 'https://unpkg.com/vue@3.4.27/dist/vue.global.js',
              },
            },
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
      !isSsrBuild && cdn({
        modules: [
          'vue',
        ],
      }),
    ],
    server: {
      origin: 'https://station-dev.luteos.com',
      proxy: {
        '^/api': {
          target: 'https://station-dev.luteos.com',
          changeOrigin: true,
          configure(proxy) {
            proxy.on('proxyReq', (proxyReq) => {
              // post request no working
              proxyReq.removeHeader('origin')
            })
          },
        },
      },
    },
    ssgOptions: {
      script: 'async',
      formatting: 'prettify',
      rootContainerId: containerId,
      crittersOptions: false,
      entry: 'src/main.js',
      replaceDir: env.VITE_REPLACE_PATH,
      extraLiquid: `<script src="{{ 'vue.runtime.global.prod.js' | asset_url }}" defer></script>`,
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
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.vue', '.json'],
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
        external: ['vue'],
        output: [
          {
            format: 'iife',
            entryFileNames: `${env.VITE_APP_PREFIX}[name].iife.js`,
            assetFileNames: `${env.VITE_APP_PREFIX}[name].iife.[ext]`,
          },
          {
            chunkFileNames: `${env.VITE_APP_PREFIX}[name].js`,
            entryFileNames: `${env.VITE_APP_PREFIX}[name].js`,
            assetFileNames: `${env.VITE_APP_PREFIX}[name].[ext]`,
          },
        ],
      },
    },
  }
})

export default config

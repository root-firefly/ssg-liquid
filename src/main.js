import { ViteSSG } from '@rfirefly/vite-ssg/single-page'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const containerId = `#${import.meta.env.VITE_APP_PREFIX}${import.meta.env.VITE_APP_NAME}`

export const createApp = ViteSSG(
  App,
  () => { },
  { rootContainer: containerId },
)

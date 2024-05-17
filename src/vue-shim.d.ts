/// <reference types="vite/client" />
import type { defineComponent } from 'vue'

declare module '*.vue' {
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_REPLACE_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { onMounted } from 'vue'

export function usePushState(fn) {
  onMounted(() => {
    // 首次进入需要触发
    fn()
    window.addEventListener('pushState', fn)
    window.addEventListener('replaceState', fn)
    window.addEventListener('popstate', fn)
  })
}

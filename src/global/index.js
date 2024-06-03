export const prodApiUrl = 'https://account.cozyprogram.com'
export const devApiUrl = 'https://station-dev.luteos.com'
export const isProd = import.meta.env.PROD && !import.meta.env.SSR

const isClient = typeof window !== 'undefined'
export const isShopify = isClient && typeof window.Shopify !== 'undefined'

export function getData(key, defaultValue) {
  if (!isShopify)
    return defaultValue

  return window.__PAGE_DATA__[key] || defaultValue
}

import Config from '@app/shared/config'
import { handleExceptionAndContinue } from '@app/shared/utils/errors'

export default function registerServiceWorker(): void {
  if ('serviceWorker' in navigator && Config.isProd()) {
    window.addEventListener('load', () =>
      navigator.serviceWorker.register('/sw.js').catch(handleExceptionAndContinue('SW registration failed')),
    )
  }
}

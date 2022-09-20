import 'react-app-polyfill/stable'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '@app/app'
import initWebVitals from '@app/shared/utils/metrics/web-vitals'
import registerServiceWorker from '@app/shared/utils/sw'
import registerWindowErrorEvents from '@app/shared/utils/event-listeners'
import { configureAppStore } from '@app/shared/store'
import { HelmetProvider } from 'react-helmet-async'

const store = configureAppStore()
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>,
)

registerWindowErrorEvents()
registerServiceWorker()
initWebVitals()

if ((module as any).hot) {
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  ;(module as any).hot.accept('./app', () => {
    root.unmount()
  })
  ;(module as any).hot.accept(['./shared/locales/i18n'], () => {
    // ...
  })
}

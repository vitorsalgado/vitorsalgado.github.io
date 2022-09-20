import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '@app/app'
import initWebVitals from '@app/shared/utils/metrics/web-vitals'
import registerServiceWorker from '@app/shared/utils/sw'
import registerWindowErrorEvents from '@app/shared/utils/event-listeners'
import { configureAppStore } from '@app/shared/store'
import { HelmetProvider } from 'react-helmet-async'

const store = configureAppStore()
const ROOT_CONTAINER = document.getElementById('root') as HTMLElement

const render = (): void => {
  ReactDOM.render(
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
    ROOT_CONTAINER,
  )
}

render()
registerWindowErrorEvents()
registerServiceWorker()
initWebVitals()

if ((module as any).hot) {
  ;(module as any).hot.accept('./app', () => {
    ReactDOM.unmountComponentAtNode(ROOT_CONTAINER)
    render()
  })
  ;(module as any).hot.accept(['./shared/locales/i18n'], () => {
    // ...
  })
}

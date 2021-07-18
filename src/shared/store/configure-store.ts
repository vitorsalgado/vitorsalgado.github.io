import { configureStore, EnhancedStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit'
import rootReducer from './root-reducer'
import { logger } from './middlewares/logger'
import Config from '@app/shared/config'
import { State } from './state'
import Projects from '@app/features/OpenSource/projects.data'

export const InitialState: State = {
  opensource: {
    projects: Projects
  }
}

const middlewares: Middleware[] = []

if (Config.isLogEnabled()) {
  middlewares.push(logger)
}

const store = configureStore({
  reducer: rootReducer as any,
  preloadedState: InitialState,
  middleware: [...getDefaultMiddleware(), ...middlewares],
  devTools: !Config.isProd()
})

export function configureAppStore(): EnhancedStore {
  return store
}

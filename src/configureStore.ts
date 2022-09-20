import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './modules'

export default function createStore(saga: any) {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => ([
      sagaMiddleware,
      ...getDefaultMiddleware({
        serializableCheck: false
      })
    ])
  })

  sagaMiddleware.run(saga)

  return store
}
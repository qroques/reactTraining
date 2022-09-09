import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './modules';

import {
  reducer as game,
  State as GameState
} from './modules/game'

export type RootState = {
  game: GameState;
}

export const configureStore =  () => {
  const store = createStore(
    rootReducer,
    applyMiddleware()
  )

  return store
}

export default configureStore
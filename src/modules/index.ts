import { combineReducers } from 'redux'
import game, { State as GameState } from './game'
import settings, { State as SettingsState } from './settings'

export type RootState = {
    game: GameState,
    settings: SettingsState
}
export const rootReducer = combineReducers({
    game,
    settings
})

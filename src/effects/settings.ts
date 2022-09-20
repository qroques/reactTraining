import {
    put,
    select,
    takeLeading
  } from 'redux-saga/effects'
import { Item } from '../modules/game'
import * as settingsSlice from '../modules/settings'

  function* initializeItems() {
    try {
        const existingItems: Item[] = yield select(settingsSlice.storeItemsSelector)

        if (existingItems.length > 0) {
            return
        }

        const items = JSON.parse(localStorage.getItem('items') ?? '[]')
        yield put(settingsSlice.addItems({items}))

    } catch (error) {
      console.error(error)
    }
  }

  function* addItem({ payload }: settingsSlice.AddItemAction) {
    try {
        const existingItems: Item[] = yield select(settingsSlice.storeItemsSelector)

        localStorage.setItem('items', JSON.stringify(existingItems))
  
      } catch (error) {
        console.error(error)
      }
  }
  
  export default function* award() {
    yield takeLeading(settingsSlice.initializeState, initializeItems)
    yield takeLeading(settingsSlice.addItem, addItem)
  }
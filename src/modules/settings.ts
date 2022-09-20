import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { Item } from "./game";

type Status = 'idle' | 'loading' | 'ready' | 'error'
export type State = {
    status: Status;
    storeItems: Item[];
}

export type AddItemAction = {
    payload: {
        item: Item
    }
} 
export type AddItemsAction = {
    payload: {
        items: Item[]
    }
} 

export const initialState: State = {
    status: 'idle',
    storeItems : []
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        initializeState: (state) => ({
            ...state,
            status: 'loading'
        }),
        addItem: (state, { payload }: AddItemAction) => ({
            ...state,
            storeItems: [...state.storeItems, payload.item]
        }),
        addItems: (state, { payload }: AddItemsAction) => ({
            ...state,
            storeItems: [...state.storeItems, ...payload.items]
        })
    }
})

export const { 
    addItem,
    addItems,
    initializeState
} = settingsSlice.actions

export const storeItemsSelector = (state: RootState) => state.settings.storeItems

export const storeItems = { settingsSlice }
export default settingsSlice.reducer
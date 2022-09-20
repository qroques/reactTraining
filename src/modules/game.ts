import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

export type Item = {
    name: string,
    price: number,
    multiplier: number
}

export type State = {
    coins: number;
    ownedItems: Item[];
}

export const initialState: State = {
    coins: 0,
    ownedItems: []
}

export type GenerateLinesAction = {
    payload: { 
        coins: number;
    }
}

export type BuyItemAction = {
    payload: {
        item: Item;
    }
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increment: (state) => ({
            ...state,
            coins: state.coins + 1
        }),
        generateCoins: (state, { payload }: GenerateLinesAction) => ({
            ...state,
            coins: state.coins + payload.coins
        }),
        buyItem: (state, { payload }: BuyItemAction) => ({
            ...state,
            coins: state.coins - payload.item.price,
            ownedItems: [...state.ownedItems, payload.item]
        })
    }
})

export const { 
    increment,
    generateCoins,
    buyItem
} = gameSlice.actions

export type SelectableState = Pick<RootState, 'game'>
export const coinsSelector = (state: SelectableState) => state.game.coins;
export const inventorySelector = (state: SelectableState) => state.game.ownedItems;
export const coinPerPeriodSelector = createSelector(
    inventorySelector,
    (inventory) => inventory.reduce((prev: number, item: Item) => item.multiplier + prev, 0)
)

export default gameSlice.reducer
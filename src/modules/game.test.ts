import reducer, { coinsSelector, generateCoins, GenerateLinesAction, increment, initialState, SelectableState, State } from "./game"

describe('game reducer', () => {
    it('increments coins', () => {
        const initialState: State = {
            coins: 9,
            ownedItems: []
        }

        const state = reducer(initialState, increment())

        expect(state.coins).toEqual(10)
    })

    it('generate coin', () => {
        const initialState: State = {
            coins: 9,
            ownedItems: []
        }
        const payload: GenerateLinesAction['payload'] = {
            coins: 13
        }
        const state = reducer(initialState, generateCoins(payload))

        expect(state.coins).toEqual(22)
    })
})

describe('game selector', () => {
    it('coins selector', () => {
        const state: SelectableState = {
            game: {
                ...initialState,
                coins: 66
            }
        }

        expect(coinsSelector(state)).toEqual(66)
    })
})
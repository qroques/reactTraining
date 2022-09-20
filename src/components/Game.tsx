import { useEffect, useMemo } from "react"
import Gitcoin from "./Gitcoin"
import Store from "./Store"
import Score from "./Score"
import Inventory from "./Inventory"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { buyItem, coinPerPeriodSelector, coinsSelector, generateCoins, increment, inventorySelector, Item } from "../modules/game"
import { initializeState } from "../modules/settings"

const Game = () => {
    const coins = useSelector(coinsSelector)
    const ownedItems = useSelector(inventorySelector)
    const coinsPerPeriod = useSelector(coinPerPeriodSelector)
    const dispatch = useDispatch()

    const handleCoinClick = () => {
        dispatch(increment())
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleGenerateCoin()
        }, 100)
      
        return () => clearInterval(interval)
    })

    useEffect(() => {
        dispatch(initializeState())
    }, [])

    const handleGenerateCoin = () => {
        dispatch(generateCoins({coins: coinsPerPeriod}))
    }

    const handleBuyItem = (item: Item) => {
        dispatch(buyItem({item}))
    }

    return (
        <div>
            <Gitcoin amount={ Math.floor(coins) } onClick={handleCoinClick}/>
            <Score value={0} />
            <Store available={ Math.floor(coins) } handleBuyItem={handleBuyItem} />
            <h2>Coins per second : { Math.floor(coinsPerPeriod * 10) }</h2>
            <Inventory items={ ownedItems } />
            <Link to="/settings">Go to settings</Link>
        </div>
    )
}

export default Game
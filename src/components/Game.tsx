import { useEffect, useMemo } from "react"
import Gitcoin from "./Gitcoin"
import Store from "./Store"
import Score from "./Score"
import Inventory from "./Inventory"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { RootState } from "../configureStore"
import { buyItem, generateCoins, increment, Item } from "../modules/game"

const Game = () => {
    const coins = useSelector((state: RootState) => state.game.coins)
    const ownedItems = useSelector((state: RootState) => state.game.ownedItems)
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

    const coinsPerPeriod = useMemo(() => {
        const newCoins = ownedItems.reduce((prev: number, item: Item) => item.multiplier + prev, 0)

        return newCoins
    }, [ownedItems])

    const handleGenerateCoin = () => {
        dispatch(generateCoins(coinsPerPeriod))
    }

    const handleBuyItem = (item: Item) => {
        dispatch(buyItem(item))
    }

    return (
        <div>
            <Gitcoin amount={ Math.floor(coins) } onClick={handleCoinClick}/>
            <Score value={0} />
            <Store available={ Math.floor(coins) } handleBuyItem={handleBuyItem} />
            <h2>Coins per second : { Math.floor(coinsPerPeriod * 10) }</h2>
            <Inventory items={ ownedItems } />
            <Link to="/home">Go to game</Link>
        </div>
    )
}

export default Game
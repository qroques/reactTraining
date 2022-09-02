import { useEffect, useState } from "react"
import Gitcoin from "./Gitcoin"
import Store from "./Store"
import Score from "./Score"
import Inventory from "./Inventory"

export type Item = {
    name: string,
    price: number,
    multiplier: number
}

const Game = () => {
    const [coins, setCoin] = useState(0)
    const [score, setScore] = useState(0)
    const [ownedItems, setOwnedItem] = useState<Item[]>([])

    const handleCoinClick = () => {
        setCoin(coins + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {

        }, 100)
      
        return () => clearInterval(interval)
    }, [ownedItems])

    const buyItem = (item: Item) => {
        setOwnedItem([...ownedItems, item])
        setCoin(coins - item.price)
    }

    return (
        <div>
            <Gitcoin amount={coins} onClick={handleCoinClick}/>
            <Score value={score} />
            <Store available={coins} handleBuyItem={buyItem} />
            <Inventory items={ownedItems} />
        </div>
    )
}

export default Game
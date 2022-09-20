import { Item } from "../modules/game"
import { useSelector } from "react-redux"
import { storeItemsSelector } from "../modules/settings"

type Props = {
  available: number,
  handleBuyItem: (item: Item) => void
}

const Store = (props: Props) => {
    const storeItems = useSelector(storeItemsSelector)
    return (
        <ul>
            {storeItems.map((item, key) => 
                <li key={key}>
                    <button disabled={item.price > props.available} onClick={() => props.handleBuyItem(item)}>Buy</button>
                    <span>{item.name} - <span className='price'>{item.price}🪙</span>({item.multiplier < 0 ? '-' : '+'}{item.multiplier}/s)</span>
                </li>
            )}
        </ul>
    )
}

export default Store
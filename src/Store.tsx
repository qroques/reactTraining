import { Item } from "./Game"
import items from './item.json'

type Props = {
  available: number,
  handleBuyItem: (item: Item) => void
}

const Store = (props: Props) => {
    return (
        <ul>
            {items.map((item, key) => 
                <li key={key}>
                    <button disabled={item.price > props.available} onClick={() => props.handleBuyItem(item)}>Buy</button>
                    <span>{item.name} - <span className='price'>{item.price}🪙</span>({item.multiplier < 0 ? '-' : '+'}{item.multiplier}/s)</span>
                </li>
            )}
        </ul>
    )
}

export default Store
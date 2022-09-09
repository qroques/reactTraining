import { Item } from "../modules/game"

type Props = {
  items: Item[],
}

const Inventory = (props: Props) => {
    return (
        <>
            <h3>Inventory</h3>
            <ul>
                {props.items.map((item, key) => 
                    <li key={key}>
                        <span>{item.name}</span>
                    </li>
                )}
            </ul>
        </>
    )
}

export default Inventory
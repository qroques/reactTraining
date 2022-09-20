import { FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Item } from "../modules/game"
import { addItem, storeItemsSelector } from "../modules/settings"
import Store from "./Store"

const Settings = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [price, setPrice] = useState<number>(0)
    const [multiplier, setMultiplier] = useState<number>(0)

    const handleItemNameChange = (e: FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const handlePriceChange = (e: FormEvent<HTMLInputElement>) => {
        setPrice(parseFloat(e.currentTarget.value))
    }

    const handleMultiplierChange = (e: FormEvent<HTMLInputElement>) => {
        setMultiplier(parseFloat(e.currentTarget.value))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const item: Item = {
            name,
            price,
            multiplier
        }

        dispatch(addItem({item}))
    }
    const storeItems = useSelector(storeItemsSelector)

    return (
        <>
            <h1>Settings</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="itemName"
                    onChange={handleItemNameChange}
                    value={name}
                />
                <input
                    type="number"
                    name="price"
                    onChange={handlePriceChange}
                    value={price}
                />
                <input
                    type="number"
                    name="multipl"
                    onChange={handleMultiplierChange}
                    value={multiplier}
                />
                <input type="submit" />
            </form>

            <ul>
                {storeItems.map((item, key) => 
                    <li key={key}>
                        <span>{item.name} - <span className='price'>{item.price}🪙</span>({item.multiplier < 0 ? '-' : '+'}{item.multiplier}/s)</span>
                    </li>
                )}
            </ul>
    
            <Link to="/game">Go to game</Link>
            
        </>
    )
}


export default Settings
import './Gitcoin.css'

type Props = {
  amount: number
  onClick: () => void
}

const Gitcoin = (props: Props) => {
    return (
        <div>
            <img className="gitcoin" src="./gitCoin.png" alt="coin" onClick={props.onClick}/>
            <span>Number of coins : {props.amount}</span>
        </div>
    )
}

export default Gitcoin
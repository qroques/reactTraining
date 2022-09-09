type Props = {
    value: number
}

const Score = (props: Props) => {
    return (
        <div>
            <h2>Score : {props.value}</h2>
        </div>
    )
}


export default Score
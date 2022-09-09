import React from "react"

type Props = {
}

type State = {
    timeClicked: number
}

class ClickMeButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
          timeClicked: 0,
        };
        this.handleClickPlus = this.handleClickPlus.bind(this) 
        this.handleClickMinus = this.handleClickMinus.bind(this) 
    }

    handleClickPlus(){ 
        this.setState({timeClicked : this.state.timeClicked + 1})
    }

    handleClickMinus(){ 
        this.setState({timeClicked : this.state.timeClicked - 1})
    }

    render() {
        return (
          <div>
            <button onClick={this.handleClickMinus}>-1</button>
            <span>Time clicked : {this.state.timeClicked}</span>
            <button onClick={this.handleClickPlus}>+1</button>
          </div>
        )
    }
}

export default ClickMeButton
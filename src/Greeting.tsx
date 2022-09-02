import React from "react"

type Props = {
    firstname: string;
    lastname: string;
    onclick?: () => void;
}

class Greeting extends React.Component<Props> {
    render() {
        return (
            <div>
	
            <h2>Hello {this.props.firstname} {this.props.lastname} </h2>

          </div>
        )
    }
}



export default Greeting
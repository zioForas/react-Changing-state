import React from "react"   

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0  
            
        }

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick() {
        this.setState(prevState => {
            return {
               count: prevState.count + 180
            }
        })


    }
    render () {
        return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>spin 180 degrees!</button>
        </div>
        )
    }
}
export default App
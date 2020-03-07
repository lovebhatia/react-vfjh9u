import React, {PureComponent} from "react"
import GrandParent from "./GrandParent"

class AppPureComponent extends PureComponent {
    state = { count: 0 }
    
    increment = () => this.setState(prevState => ({count: prevState.count+}))
    
    render() {
        console.log("[GP] [P] [C] [GC] APP just rendered")
        return (
            <div>
                <button onClick={this.increment}>+1</button>
                <h2>{this.state.count}</h2>
                <p>I'm the App component</p>
                <GrandParent count={this.state.count}  />
                <GrandParent />
            </div>
        )    
    }
}

export default AppPureComponent
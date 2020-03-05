import React, {Component} from "react"
import GrandParent from "./GrandParent"

class AppReactTreeRender extends Component {
    render() {
        console.log("[GP] [P] [C] [GC] APP just rendered")
        return (
            <div>
                <p>I'm the App component</p>
                <GrandParent />
                <GrandParent />
            </div>
        )    
    }
}

export default App
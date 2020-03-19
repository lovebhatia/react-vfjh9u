import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextProviderChange extends Component {
    render() {
        return (
            <Provider value={""}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProviderChange, Consumer as ThemeContextConsumerChange}

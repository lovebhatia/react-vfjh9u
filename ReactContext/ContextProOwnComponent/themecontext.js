import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProviderMove extends Component {
    render() {
        return (
            <Provider value={""}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProviderMove, Consumer as ThemeContextConsumerMove}

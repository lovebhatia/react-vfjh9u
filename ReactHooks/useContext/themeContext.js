import React, {Component} from "react"
//const {Provider, Consumer} = React.createContext()
//here i will just call it themem context
const ThemeContextUse = React.createContext()
/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextUseProvider extends Component {
    state = {
        theme: "dark"
    }
    
    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            }
        })
    }
    
    render() {
        return (
            <ThemeContextUse.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContextUse.Provider>
        )
    }
}

//export {ThemeContextUseProvider, Consumer as ThemeContextUseConsumer}
export {ThemeContextUseProvider, ThemeContextUse}

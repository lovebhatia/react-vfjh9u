import React, {Component,useState} from "react"
//const {Provider, Consumer} = React.createContext()
//here i will just call it themem context
const ThemeContextPracRef = React.createContext()
/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

function ThemeContextPracRefProvider(props) {
   const[theme,setTheme]=useState("dark")
    
   function toggleTheme  () {
        setTheme(prevTheme => {
            return 
          prevTheme === "light" ? "dark" : "light"
          
        })
    }
    
        return (
            <ThemeContextPracRef.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
                {props.children}
            </ThemeContextPracRef.Provider>
        )
    
}
/*
class ThemeContextPracRefProvider extends Component {
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
            <ThemeContextPracRef.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContextPracRef.Provider>
        )
    }
}
*/
//export {ThemeContextUseProvider, Consumer as ThemeContextUseConsumer}
export {ThemeContextPracRefProvider, ThemeContextPracRef}

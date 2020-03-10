import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Header extends Component {
  static contextType = ThemeContext
    render() {
      const theme=this.context
      console.log(this.context)
        return (
           // <header className={`${this.context}-theme`}>
               // <h2>{`${this.context} theme`}</h2>
           // </header>
           <header className={`${theme}-theme`}>
                <h2>{`${theme} theme`}</h2>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>  
            </header>
        )    
    }
}

Header.contextType=ThemeContext
export default Header

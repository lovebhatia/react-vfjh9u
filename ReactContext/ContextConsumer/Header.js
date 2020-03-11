import React, {Component} from "react"
import ThemeContextConsumer from "./themeContext"

function Header() {
    
    
       
        return (
          <ThemeContextConsumer.Consumer>
          {
            theme =>(
                <header className={`${theme}-theme`}>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            </header>
            )
          }
       </ThemeContextConsumer.Consumer>
        )    
    }


export default Header

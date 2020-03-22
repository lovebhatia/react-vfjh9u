import React, {Component,useContext} from "react"
import {ThemeContextUse} from "./themeContext"

function Header(props) {
  const context=useContext(ThemeContextUse)
    return (
       
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
         
    )    
}

export default Header

import React, {Component} from "react"
import {ThemeContextConsumerChange} from "./themeContextChange"

function Header(props) {
    return (
       <ThemeContextConsumerChange>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumerChange>
    )    
}

export default Header


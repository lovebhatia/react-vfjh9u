import React, {Component} from "react"
import {ThemeContextUseConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextUseConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextUseConsumer>
    )    
}

export default Header

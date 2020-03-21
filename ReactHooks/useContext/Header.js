import React, {Component} from "react"
import {ThemeContextUseStateConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextUseStateConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextUseStateConsumer>
    )    
}

export default Header

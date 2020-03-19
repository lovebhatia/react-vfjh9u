import React, {Component} from "react"
import {ThemeContextConsumerChange} from "./themeContextChange"

function Header(props) {
    return (
        <ThemeContextConsumerChange>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumerChange>
    )    
}

export default Header

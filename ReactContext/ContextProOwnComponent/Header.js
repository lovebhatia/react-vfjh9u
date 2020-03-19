import React, {Component} from "react"
import {ThemeContextConsumerMove} from "./themecontext"

function Header(props) {
    return (
        <ThemeContextConsumerMove>
            {theme => (
                <header className={`${theme}-theme`}>
                    <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContextConsumerMove>
    )    
}

export default Header

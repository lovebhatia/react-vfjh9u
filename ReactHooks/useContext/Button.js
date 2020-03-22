import React from "react"
import {ThemeContextUseConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextUseConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextUseConsumer>
    )    
}

export default Button

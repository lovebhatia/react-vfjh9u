import React from "react"
import {ThemeContextUseStateConsumer} from "./themeContext"

function Button(props) {
    return (
        <ThemeContextUseStateConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextUseStateConsumer>
    )    
}

export default Button

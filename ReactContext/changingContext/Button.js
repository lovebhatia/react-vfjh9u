 import React from "react"
import {ThemeContextConsumerChange} from "./themeContextChange"

function Button(props) {
    return (
        <ThemeContextConsumerChange>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumerChange>
    )    
}

export default Button

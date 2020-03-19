import React from "react"
import {ThemeContextConsumerChange} from "./themeContextChange"

function Button(props) {
    return (
        <ThemeContextConsumerChange>
            {theme => (
                <button className={`${theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumerChange>
    )    
}

export default Button

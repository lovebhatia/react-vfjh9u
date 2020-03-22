
import React, {useContext} from "react"
import {ThemeContextUse} from "./themeContext"

function Button(props) {
    const context = useContext(ThemeContextUse)
    return (
        <button 
            onClick={context.toggleTheme} 
            className={`${context.theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button
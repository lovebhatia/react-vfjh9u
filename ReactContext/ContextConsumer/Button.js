import React from "react"
import ThemeContext from "./themeContext"

function Button(props) {
    return (
        <button className={`${theme}-theme`}>Switch Theme</button>
    )    
}

export default Button

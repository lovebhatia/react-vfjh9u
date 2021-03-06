
import React, {useContext} from "react"
import {ThemeContextUse} from "./themeContext"

function Button(props) {
    //const context = useContext(ThemeContextUse)
    const{theme,toggleTheme}=useContext(ThemeContextUse)
    return (
        <button 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button

import React, {useContext} from "react"
import {ThemeContextPracRef} from "./themeContext"

function Button(props) {
    //const context = useContext(ThemeContextUse)
    const{theme,toggleTheme}=useContext(ThemeContextPracRef)
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
import React from "react"
import PropTypes from "prop-types"
import {ThemeContextConsumerMove} from "./themecontext"

function Button(props) {
    return (
        <ThemeContextConsumerMove>
            {theme => (
                <button className={`${theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumerMove>
    )    
}

export default Button

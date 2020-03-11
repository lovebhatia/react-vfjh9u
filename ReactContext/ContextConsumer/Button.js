import React from "react"
import ThemeContextConsumer from "./themeContext"

function Button(props) {
    return (
      //<ThemeContextConsumer.Consumer>{
        //theme => (
       //     <button className={`${theme}-theme`}>Switch Theme</button>
        //)
     // }
     <button className={`${props.theme}-theme`}>Switch Thme</button>
        /</ThemeContextConsumer.Consumer>
    )    
}

export default Button

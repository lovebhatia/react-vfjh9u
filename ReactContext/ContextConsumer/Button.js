import React from "react"
import ThemeContextConsumer from "./themeContext"
import PropTypes from "prop-types"

function Button(props) {
    return (
      //<ThemeContextConsumer.Consumer>{
        //theme => (
       //     <button className={`${theme}-theme`}>Switch Theme</button>
        //)
     // }
     <button className={`${props.theme}-theme`}>Switch Theme</button>
       // </ThemeContextConsumer.Consumer>
    )    
}
Button.propTypes={
  theme: PropTypes.oneOf(["light","dark"])
}
Button.defaultProps ={
  theme : "light"
}
export default Button

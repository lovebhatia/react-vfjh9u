import React from "react"
import Header from "./Header"
import Button from "./Button"
import ThemeContextConsumer from './themeContext'

function AppContextConsumer() {
    return (
        <div>
        
            <Header />
            <ThemeContextConsumer.Consumer>
            {theme => (
                <Button theme={theme}/>
              )
            }
            </ThemeContextConsumer.Consumer>
            <Button theme="light"/>
            <Button />
        </div>
    )
}

export default AppContextConsumer
            //we have done it by using render props.


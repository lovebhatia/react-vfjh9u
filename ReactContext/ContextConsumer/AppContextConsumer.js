import React from "react"
import Header from "./Header"
import Button from "./Button"
import ThemeContextConsumer from './themeContext'

function AppContextConsumer() {
    return (
        <div>
        
            <Header />
            <ThemeContextConsumer.consumer>
            <Button />
            </ThemeContextConsumer.consumer>
            <Button />
            <Button />
        </div>
    )
}

export default AppContextConsumer
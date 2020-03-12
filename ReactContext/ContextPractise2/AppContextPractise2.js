import React from "react"

import Header from "./Header"
import UserContext from "./UserContext"

class AppContextPractise2 extends React.Component {
    static contextType = UserContext
    
    render() {
        const username = this.context
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {username}! 🎉</p>
                </main>
            </div>
        )
    }
}

export default AppContextPractise2
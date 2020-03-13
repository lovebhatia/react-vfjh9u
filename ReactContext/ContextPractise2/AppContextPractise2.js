import React from "react"

import Header from "./Header"
import UserContext from "./UserContext"


/**
 * Challenge:
 * 
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

function AppContextPractise2(props)
{
  return(
    <div>
    <Header/>
    <main>
    <UserContext.Consumer>
    {
    username =>(
      <p className="main">No New Notification, {username}!</p>
    )
    }
  
    </UserContext.Consumer>
    </main>
    </div>
  )
}


/*class AppContextPractise2 extends React.Component {
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
*/
export default AppContextPractise2
import React, {Component} from "react"
import UserContext from "./UserContext"


function Header(props)
{
  return(
    <header>
    <UserContext.Consumer>
    {
      username =>(
        <p>Welcome, {.username}!</p>

      )
    }
    
    </UserContext.Consumer>
    </header>
    
  )
}

/*class Header extends Component {
    static contextType = UserContext
    
    render() {
        const username = this.context
        return (
            <header>
                <p>Welcome, {username}!</p>
            </header>
        )    
    }
}
*/
export default Header

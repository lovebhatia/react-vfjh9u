import React, {Component} from "react"
import UserContext from "./UserContext"


function Header(props)
{
  return(
    <header>
    <p>Welcome, {props.username}!</p>
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

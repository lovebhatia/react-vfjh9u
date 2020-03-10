import React,{Component} from 'react';
import UserNameContext from './UserNameContext'

class Header extends Component
{
  static contextType=UserNameContext;
  render()
  {
    const username=this.context
    return(
      <header>
        <p> {`Welcome ,${username}`}</p>
      </header>
    )
  }
}
export default Header;

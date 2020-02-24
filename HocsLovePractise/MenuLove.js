import React,{Component} from 'react';

class MenuLove extends Component
{
  state={
    show:true
  }

  toggleShow = () =>
  {
    this.setState(prevState =>
    {
      return{
        show : !prevState.show
      }
    })
  }
  
    render()
    {
      return(
        <div>
      <button onclick={this.toggleShow}> {this.state.show ? "hide" : "show"} Menu</button>
      <nav style={{display : this.state.show ? "block" : "none"}}>
      <h6>Signed in as Coder123</h6>
       <a>Your Profile</a>
        <a>Your Repositories</a>
         <a>Your Stars</a>
          <a>Your Gists</a>
      </nav>
      </div>
      )
    }
}
export default MenuLove;
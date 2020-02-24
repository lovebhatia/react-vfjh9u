import React,{Component} from 'react';

class MenuLove extends Component
{
  state={
    show:true
  }

  toggleShow = () =>
  {
    console.log('test');
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
      <button onClick={this.toggleShow}> {this.state.show ? "Hide" : "Show"} Menu</button>
      <nav style={{display : this.state.show ? "block" : "none"}} >
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


//A block element fills the entire line, and nothing can be displayed on its left or right side. ... However, if you set display:none , it hides the entire element, while visibility:hidden means that the contents of the element will be invisible, but the element stays in its original position and size
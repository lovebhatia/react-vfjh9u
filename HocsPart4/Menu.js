import React,{Component} from 'React';
class Menu extends Component
{
  render()
  {
    return(
      <div>
      <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button>
      <nav style={{display : this.state.show ? "block" : "none"}}>
      <a>your profile</a>
      <a>Your Repositories</a>
      <a>Your Stars</a>
      <a>Your Gists</a>

      </nav>
      </div>
    )
  }
}

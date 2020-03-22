import React,{Component} from "react"
class Toggler extends Component{
  state={
    on : this.props.defaultonValue
  }
  static defualtProps={
    defaultonValue : false
  }
  toggle = () =>{
    this.setState(prevState => ({on : !prevState}))
  }
render()
{
  <div>
  {
    this.props.render({
      on : this.state.on,
      toggle : this.toggle
    })
  }
  </div>
}

}
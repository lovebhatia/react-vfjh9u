import React,{Component} from "react"


class AppUseState1 extends Component
{
  constructor()
  {
    super()
    this.state={
      answer : "yes"
    }
  }
  render()
  {
    return(
      <div>
      <h1>Is state  impoertant to know ? {this.state.answer}</h1>
      </div>
    )
  }


}

export default AppUseState1;
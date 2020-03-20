import React,{Component,useState} from "react"

function AppUseState1()
{
  const [value]=useState("Yes love");
  console.log(value);
  return(
     <div>
      <h1>Is state  important to know ? {value}</h1>
      </div>

  )
}

/*
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
      <h1>Is state  important to know ? {this.state.answer}</h1>
      </div>
    )
  }


}
*/

export default AppUseState1;
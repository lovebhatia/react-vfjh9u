import React,{Component} from "react";
class GrandChild extends Component
{
  render()
  {
    console.log("[ ]   [ ]   [ ]   [👶🏻] rendered");
    return(
      <div>
      <p>I am Grand Child Component</p>
      </div>
    )
  }
}

export default GrandChild;
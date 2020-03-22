import React, {Component,useState} from "react"
import useCounter from "./useCounter"
/**
 * Pop Quiz!
 * 
 * Refactor the class component below to use hooks instead
 */

function AppCustomHook()
{
  //const[count,setCount]=useState(0);
 
 //function increment()
 //{
  // setCount(prevCount => prevCount + 1)
 //}
 const {count,increment} =useCounter()
  return(
    <div>
    <h1>The count is {count}</h1>
    <button onClick={increment}>Add 1</button>
    </div>
  )

}
export default AppCustomHook

/*
class AppCustomhook extends Component {   
    state = {
        count: 0
    }
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    render() {
        return (
            <div>
                <h1>The count is {this.state.count}</h1>
                <button onClick={this.increment}>Add 1</button>
            </div>
        )
    }
}
*/

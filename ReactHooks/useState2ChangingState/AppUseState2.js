import React,{useState} from "react"

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function AppUseState2()
{
  const [value, setCount]=useState(0);
  function increment()
  {
    setCount((prevCount) => prevCount+1)
  }

  function decrement()
  {
    setCount(
      (prevCount) => prevCount-1
    )
  }


  return(
    <div>
    <h1>{value}</h1>
    <button onClick={increment}>change!</button>
        <button onClick={decrement}>change!</button>

    </div>
  )
}

/*
class AppUseState2 extends React.Component {
    //constructor() {
        super()
       // this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}
*/

export default AppUseState2

// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side effects?
// Network request
// Manual DOM manipulation
// Event listeners or timeouts and intervals

import React, {useState,useEffect} from "react"

function AppUseEffect1() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
  
         useEffect(() => {
        // setColor(randomcolor())
        console.log('changed')
    }, [count])
  
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default AppUseEffect1

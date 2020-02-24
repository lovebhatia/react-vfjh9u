import React from "react"
import Example from "./Example"

function AppRenderProps2() {
    return (
        <div>
            
            <Example name ={function() {return "hey there"}}/>
        </div>
    )
}

export default AppRenderProps2
 
////<Example name={"Bob"} />
            //<Example name={['test','test1']} />
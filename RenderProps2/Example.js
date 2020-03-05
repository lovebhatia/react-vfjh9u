import React from "react"

function Example(props) {
    console.log(props.name())
    return(
      <div>
      {
      props.name('sarah')
      }
      </div>
    )
}

export default Example
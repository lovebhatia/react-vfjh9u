import React from "react"

function Example(props) {
    console.log(props.name())
    return <h1>Hi {props.name()}</h1>
}

export default Example
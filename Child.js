import React from "react"
import Grandchild from "./GrandChild"

function Child() {
    return (
        <>
            <h1>I'm the Child component</h1>
            <Grandchild />
        </>
    )
}

export default Child
import React from "react"
import Card from "./Card"

function AppDefaultprops() {
    return (
        <div>
            <Card cardColor="red" height={200} width={4000} />
            <Card/>
            <Card cardColor="green" height={200} width={} />
        </div>
    )
}

export default AppDefaultprops
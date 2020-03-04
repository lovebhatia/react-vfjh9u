import React from "react"
import Menu from "./Menu"
import Favorite from "./Favorite"

function AppHocsLove() {
   return (
        <div>
            <Menu something="whatever" />
            <hr />
            <Favorite />
        </div>
    )
}

export default AppHocsLove
import React from "react";
import Menu from './Menu'
import Favorite from './Favorite'
function AppRefactorToggler()
{
  return(
    <div>
    <Menu/>
    <hr/>
    <Favorite/>
  </div>
  )
}

export default AppRefactorToggler
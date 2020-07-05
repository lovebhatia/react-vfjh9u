import React from "react"
import{Link,Route,Switch} from "react-router-dom"
import Photos from "./pages/Photos"
function Header(){
  return(
    <header>
      <h2 Link to="/">Pic Some</h2>
      <i classname="ri-shopping-cart-line ri-fw ri-2x"></i>
      <Switch>
      <Route exact path="/"><Photos/></Route>
      </Switch>
    </header>
  )
}

export default Header
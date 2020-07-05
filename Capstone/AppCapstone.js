import React from "react"
import Header from "./components/Header"
import {Switch,Route} from "react-router-dom"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

function AppCapstone(){
  return(
    <div>
    <Header/>
    <Switch>
      <Route exactPath="/">
       <Photos/>
      </Route>
      <Route Path="/cart">
        <Cart/>
      </Route>
    </Switch>
    </div>
  )
}

export default AppCapstone
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
    <Route exactPath="/"><Photos/></Route>
    <Route exactPath="/cart"></></Route>
    </Switch>
    <h1>Home Page</h1>
    </div>
  )
}

export default AppCapstone
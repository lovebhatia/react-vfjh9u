import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"

import {Switch, Route} from "react-router-dom"

function AppUseMatchParam() {    
   return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/user">
                    <Profile/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}
export default AppUseMatchParam

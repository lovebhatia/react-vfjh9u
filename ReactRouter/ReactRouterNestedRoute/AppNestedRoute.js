import React from "react"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Info from './pages/profile/Info'
import Settings from './pages/profile/Info'

import {Switch, Route} from "react-router-dom"

function AppNestedRoute() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>

                 <Route path="/profile/info">
                    <Info/>
                </Route>
                <Route path="/profile/settings">
                    <Settings/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default AppNestedRoute
import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from './Home';
import About from './About';


 function AppSwitchRoute()
 {
   return(
     <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Switch>

           // <Route exact path="/" render={() => <Home/>}/>
           // <Route  path="/about" render={() => <About/>}/>

           <Route exact path="/" component={Home}/>
            <Route  path="/about" render={() => <About/>}/>
            </Switch>
 

        </div>
   )

 }

 export default AppSwitchRoute
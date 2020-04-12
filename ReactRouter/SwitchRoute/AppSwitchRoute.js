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


              //Render p
           // <Route exact path="/" render={() => <Home/>}/>
           // <Route  path="/about" render={() => <About/>}/>

            //pass the component to a prop
           //<Route exact path="/" component={Home}/>
            //<Route  path="/about" render={() => <About/>}/>


              //children concept 
            <Route exact path="/"><Home/></Route>
            <Route exact path="/"><About/></Route>

            </Switch>
 

        </div>
   )

 }

 export default AppSwitchRoute
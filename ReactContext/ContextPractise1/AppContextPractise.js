import React,{Component} from 'react';
import Header from './Header';
import UserNameContext from './UserNameContext'

class  AppContextPractise extends Component
{
  static contextType =UserNameContext;
  render()
  {
    const username=this.context;
    console.log(username)
  return (

    <div>
    <Header/> 
    <main>
    <p className="main">No new Notification, {username} ! 🎉</p>
    </main>
    </div>
  )
}
}

export default AppContextPractise;
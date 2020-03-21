
import React,{useState,useEffect} from "react"
function AppSpeedTypingGame()
{ 
  const [text,setText]=useState("");
  const [timeRemaining,setTimeRemaining]=useState(5);
  function handleChange(event)
  {
      const {value}=event.target;
      setText(value)

  }
  function calculateWordCount(text)
  {
      const wordsArr=text.trim.split(" ")
      console.log(wordsArr.length)
      return wordsArr.filter(word => word !== "").length
  }


//as a recap useEffect will run when the component first mounts and then it will run anytime the time reamining changes. whats kind of cool about that is we can use seTimeout simply wait for 1 sec change the time remaining which will change the 
  useEffect( () => {
    setTimeout( () => {
      setTimeRemaining(time => time-1)
    },1000)

  },[timeRemaining])

  console.log(text)

  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea onChange={handleChange}
    value={text}/>
    <h4>Time reminaing: {timeRemaining}</h4>
    <button onClick={() => calculateWordCount(text)}>Start</button>
    <h1>Word count: ???</h1>
    </div>
  )

}
export default AppSpeedTypingGame;

//test the count by clicking on button 
    //here i cant just run calculatewordcount the beacuse the  eventlistener is going to pass the event to whatever function i run here. so i have to run a anonymous function then use calculateWordCount and then the text i passing in function referring to actual one in stage 
    //<button onClick={calculateWordCount}>Start</button>
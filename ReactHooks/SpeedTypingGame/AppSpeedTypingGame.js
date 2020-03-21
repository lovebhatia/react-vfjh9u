
import React,{useState,useEffect} from "react"
function AppSpeedTypingGame()
{ 
  const satrtingType=5
  const [text,setText]=useState("");
  const [timeRemaining,setTimeRemaining]=useState(satrtingType);
  const [isTimeRunning,setIsTimeRunnig]=useState(false);
//keeping track of word count is going to required me to save the word count in state.
  const [wordCount,setWordCount]=useState(0);

  function handleChange(event)
  {
      const {value}=event.target;
      setText(value)

  }
  function calculateWordCount(text)
  {
      const wordsArr=text.trim().split(" ")
      console.log(wordsArr.length)
      return wordsArr.filter(word => word !== "").length
  }
  function startGame()
  {
    setIsTimeRunnig(true)
    setTimeRemaining(satrtingType)
    setText("");
  }
  function endGame() {
       // setIsTimeRunning(false)
       // setWordCount(calculateWordCount(text))
        setIsTimeRunnig(false)
          const numWords = calculateWordCount(text)
          console.log(numWords);
          setWordCount(numWords);
    }


//as a recap useEffect will run when the component first mounts and then it will run anytime the time reamining changes. whats kind of cool about that is we can use seTimeout simply wait for 1 sec change the time remaining which will change the 
  useEffect( () => {
    if(isTimeRunning &&  timeRemaining > 0)
    {

    setTimeout( () => {
      setTimeRemaining(time => time-1)
    },1000)
    }
    else if(timeRemaining === 0) {
             endGame()

          //here we are not able to start our game while clicking on start button after one time it starts .
          //lets go where the button atually get clicked here we simply setting setIsTimeRunning(true) but clicking the button is not gonna change the amount of tim remaining.

          //lets have a another function for this. say startclock()


        }
  },[timeRemaining,isTimeRunning])

// https://www.google.com/search?q=Disable+button+in+react
  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea onChange={handleChange}
    value={text}/>
    <h4>Time reminaing: {timeRemaining}</h4>
    <button onClick={startGame} disabled={isTimeRunning}>Start</button>
    <h1>Word count: {wordCount}</h1>
    </div>
  )

}
export default AppSpeedTypingGame;

//test the count by clicking on button 
    //here i cant just run calculatewordcount the beacuse the  eventlistener is going to pass the event to whatever function i run here. so i have to run a anonymous function then use calculateWordCount and then the text i passing in function referring to actual one in stage 
    //<button onClick={calculateWordCount}>Start</button>
  //      <button onClick={() => calculateWordCount(text)}>Start</button>
//    <button onClick={() => setIsTimeRunnig(true)}>Start</button>

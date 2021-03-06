import {useState, useEffect, useRef} from "react"
function useWordGame()
{
  const satrtingType=5
  const [text,setText]=useState("");
  const [timeRemaining,setTimeRemaining]=useState(satrtingType);
  const [isTimeRunning,setIsTimeRunnig]=useState(false);
  const inputRef=useRef(null)
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
            inputRef.current.disabled = false

    inputRef.current.focus()
    //here reacct will asynchronously change state which means its not going to stop the other lines of this code from happening while its in the process of changing state as such we are trying to focus on disabled text area 

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

      return {inputRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}


}
export default useWordGame
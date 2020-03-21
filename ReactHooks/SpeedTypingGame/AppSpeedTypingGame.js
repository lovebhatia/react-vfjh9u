/**
 * Challenge1: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */

/**
 * Challenge2: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
/**
 * Challenge3:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

import React,{useState} from "react"
function AppSpeedTypingGame()
{ 
  const [text,setText]=useState("");
  function handleChange(event)
  {
      const {value}=event.target;
      setText(value)

  }
  function calculateWordCount(text)
  {
      const wordsArr=text.split(" ")
      console.log(wordsArr.length)
      return wordsArr.length
  }


  console.log(text)

  return(
    <div>
    <h1>How fast do you type?</h1>
    <textarea onChange={handleChange}
    value={text}/>
    <h4>Time reminaing: ???</h4>
    <button onClick={() => calculateWordCount(text)}>Start</button>
    <h1>Word count: ???</h1>
    </div>
  )

}
export default AppSpeedTypingGame;

//test the count by clicking on button 
    //here i cant just run calculatewordcount the beacuse the  eventlistener is going to pass the event to whatever function i run here. so i have to run a anonymous function then use calculateWordCount and then the text i passing in function referring to actual one in stage 
    //<button onClick={calculateWordCount}>Start</button>
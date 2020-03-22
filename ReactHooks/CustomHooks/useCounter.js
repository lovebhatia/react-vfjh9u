import React,{useState} from "react";
function useCounter()
{
  const[count,setCount]=useState(0);
 
 function increment()
 {
   setCount(prevCount => prevCount + 1)
 }
 //return {count,increment}
 return [count,increment]
 //now i can give any name to count in appcustom hook
}
export default useCounter
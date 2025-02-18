// Implemantation of a traffic light

// .Container: {
//     background-color: #000;
//     border-radius: 8px;
//     display: flex;
//     padding: 8px;
//     gap: 8px;

// }
// .Circle{
//  width: 100px; 
//  height: 100px;
//  border-radius: 50%;
//  border: 'none';
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  margin: 10px;
//  text-align: center
// }

// .traffic-light-container {
//   background-color: #000;
//   border-radius: 8px;
//   display: flex;
//   padding: 8px;
//   gap: 8px;
// }
import "./styles.css";
import {useState, useEffect} from 'react'

const config = {
  red: {
    backgroundColor: 'red',
    light: '#f1948a',
    duration: 1000,
    next: 'yellow',
    
  },
  yellow: {
    backgroundColor: 'yellow',
    light: '#fcf3cf ',
    duration: 1000,
    next: 'green',
  },
  green: {
    backgroundColor: 'green',
    light: 'lightGreen',
    duration: 1000,
    next: 'red',
  },
  
};
function Lights({backgroundColor})  {
  return (
    <div
    aria-hidden={true}
    style={{backgroundColor}}
    className="Circle">
    </div>
  )
}


export default function App() {

  const [currentColor, setCurrentColor] = useState('red');
  const { duration, next } = config[currentColor];

  useEffect(()=>{
     
      let timer = setTimeout(()=>{
        setCurrentColor(next)
      }, duration)
      
      return()=> { clearTimeout(timer)}

  }, [currentColor]);


  return (
    
      <div className="traffic-light-container" >
    {Object.keys(config).map((color)=> (
      <Lights 
      key={color}
      backgroundColor={currentColor == color ? config[color].backgroundColor: config[color].light }
      color={color} />
    ))}
     
      </div>
  );
}


//create your memoised function that will return a function

function memoize(fn){
  let callCount = 0;
  let cache = new Map();

  const generateKey = (data) => {
     return JSON.stringify(data);
  }

  const memoizedFn = (...args) => {
    const key = generateKey(args);
    if(cache.has(key)){
      return cache.get(key);
    }else{
      const result = fn(...args);
      cache.set(key, result);
      callCount++;
      return result;
    }
    
  }
  memoizedFn.getCallCount = () => callCount;
  return memoizedFn;
}


// write a function that takes a string as input and returns a character so that when the 
// question marks are replaced by that single character , the string will become a palindrome.
// All the question marks in the string have to be replaced by same character.
// If it is not possible to make the input string a palindrome, the function should return false.
// You're not allowed to use string prototype methods like replace, replaceAll and reverse

// example input strings

// "a?da" -  
// "ba?a?b" - 
// "b?aa" -  
// 

function charPallindrome(s){
  let n = s.length;
  let possibleChar = null;
  for(let i=0;i<n/2;i++){
      let left = s[i];
      let right = s[n-1-i];
      if(left=='?' && right=='?'){
          continue;
      }else if(left=='?'){
          if(possibleChar == null) possibleChar=right;
          else if(possibleChar!=right) return false;
          
      }
      else if(right=='?'){
          if(possibleChar == null) possibleChar= left;
          else if(possibleChar!=left) return false;
          
      }
     else if(left!=right) return false;
  }
  return possibleChar || a;
}
const ans = charPallindrome("a?da")
console.log(ans)

import { useState } from "react";
const lightColors = {
  primary: "#101010",
  secondary: "#7f7f7f",
  background: "#efefef",
  border: "#303030",
};

const darkColors = {
  primary: "#efefef",
  secondary: "#7f7f7f",
  background: "#101010",
  border: "#b0b0b0",
};

const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const nextTheme = theme == "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  const colors = theme === "dark" ? darkColors : lightColors;
  return { colors, currentTheme: theme, toggleTheme };
};

export default useTheme;
import "./styles.css";
import useTheme from "./useTheme";

export default function App() {
  const { theme, colors, toggleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: colors.background,
        color: colors.primary,
        padding: "1rem",
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}







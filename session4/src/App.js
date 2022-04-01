import { useState } from 'react';
import './App.css';
function App() {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => {
      prev++;
      if(prev > 2) {
        return prev = 0;
      }
      return prev;
    })
  }
  const handlePrev = () => {
    setIndex((prev) => {
      prev--;
      if(prev < 0) {
        return prev = 2;
      }
      return prev;
    })
  }
  return (
    <div>
      <div className='light__wrapper'>
        <Light color='red' isOn={index===0}></Light>
        <Light color='green' isOn={index===1}></Light>
        <Light color='yellow' isOn={index===2}></Light>
      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

const Light = ({color, isOn}) => {
  if(isOn) {
    return (
      <span className='light' style={{backgroundColor: color}}></span>
    )
  }
  return (
      <span className='light'></span>
  )
}

export default App;

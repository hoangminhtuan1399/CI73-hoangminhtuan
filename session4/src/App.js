import { useState } from 'react';
import './App.css';
function App() {
    return (
        <TrafficLight />
    )
}

const TrafficLight = (props) => {
    const white_color = (...arr) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 'white';
        };
        return arr;
    }  
    let light_0, light_1, light_2;
    [light_0, light_1, light_2] = white_color(light_0, light_1, light_2);
    light_0 = '';
    
    const [light_arr, setLight_arr] = useState([light_0, light_1, light_2]);

    const [index, setIndex] = useState(1);
    const next_light = () => {
      setIndex(() => {
        if (index >= light_arr.length-1) {
          return 0;
        }
        return index + 1;
      })
      for(let i = 0; i < light_arr.length; i++) {
        light_arr[i] = 'white'
      }
      light_arr[index] = '';
      console.log(index, light_arr);
    }
    // const prev_light = () => {
    //   setIndex(() => {
    //     if (index < 1) {
    //       return light_arr.length-1;
    //     }
    //     return index - 1;
    //   })
    //   for(let i = 0; i < light_arr.length; i++) {
    //     light_arr[i] = 'white'
    //   }
    //   light_arr[index] = '';
    //   console.log(index, light_arr);
    // }

    return (
        <div id="container">
            <div className='button__wrapper'>
                <button id="btn__prev" onClick>Prev</button>
                <button id="btn__next" onClick={next_light}>Next</button>
            </div>
            <div className='light__wrapper'>
                <span className={'light red ' + light_arr[0]}></span>
                <span className={'light green ' + light_arr[1]}></span>
                <span className={'light yellow ' + light_arr[2]}></span>
            </div>
        </div>
    )
}

export default App;

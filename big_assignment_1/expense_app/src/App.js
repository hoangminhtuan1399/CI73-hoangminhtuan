import './App.css';
import { HomeHeader } from './HomeHeader';
import { AddHeader } from './AddHeader';
import { RadiusBorder } from './RadiusBorder';
import { Main } from './Main';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(true);
  const handleOpenInput = () => {
    setIsShown(!isShown);
  }
  const [expenseList, setExpenseList] = useState([
    {
      name: 'Some Book',
      money: 50,
      time: new Date(2022,10,16),
    },
    {
      name: 'Some Book',
      money: 50,
      time: new Date(2021,10,16),
    },
    {
      name: 'Some Book',
      money: 50,
      time: new Date(2019,10,16),
    },
  ]);

  const addExpenseList = (name, money, time) => {
    setExpenseList(() => {
      return [
        ...expenseList,
        {
          name: name,
          money: money,
          time: time,
        }
      ]
    }) 
  }

  return (
    <div className="App">
      {isShown ?  
      <RadiusBorder border_color="transparent">
        <HomeHeader isShown={true} handleOpenInput={handleOpenInput}/>
      </RadiusBorder> : 
      <RadiusBorder border_color="transparent">
        <AddHeader handleOpenInput={handleOpenInput} expenseList={expenseList} addExpenseList={addExpenseList}/>
      </RadiusBorder> }     
      <RadiusBorder border_color="transparent">
        <Main expenseList={expenseList}/>
      </RadiusBorder>
    </div>
  )
}

export default App;

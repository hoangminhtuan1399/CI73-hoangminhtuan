import './App.css';
import { HomeHeader } from './HomeHeader';
import { AddHeader } from './AddHeader';
import { RadiusBorder } from './RadiusBorder';
import { Main } from './Main';
import { useState } from 'react';
import { useContext } from 'react';
import data from './Context/DataContext';

function App() {
  const [isShown, setIsShown] = useState(true);
  const handleOpenInput = () => {
    setIsShown(!isShown);
  }
  const [expenseList, setExpenseList] = useState(useContext(data).expenseList);
  // console.log(expenseList);

  return (
    <div className="App">
      <data.Provider value={{expenseList: expenseList, setExpenseList: setExpenseList}}>
        {isShown ?  
        <RadiusBorder border_color="transparent">
          <HomeHeader isShown={true} handleOpenInput={handleOpenInput}/>
        </RadiusBorder> : 
        <RadiusBorder border_color="transparent">
          <AddHeader handleOpenInput={handleOpenInput}/>
        </RadiusBorder> }     
        <RadiusBorder border_color="transparent">
          <Main expenseList={expenseList} setExpenseList={setExpenseList}/>
        </RadiusBorder>
      </data.Provider>
    </div>
  )
}

export default App;

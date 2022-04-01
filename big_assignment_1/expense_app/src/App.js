import './App.css';
import { HomeHeader } from './HomeHeader';
import { AddHeader } from './AddHeader';
import { RadiusBorder } from './RadiusBorder';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <RadiusBorder border_color="transparent">
        <AddHeader />
      </RadiusBorder>
      <RadiusBorder border_color="transparent">
        <Main />
      </RadiusBorder>
    </div>
  )
}

export default App;

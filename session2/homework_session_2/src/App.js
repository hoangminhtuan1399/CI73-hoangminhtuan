import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div id="header" className="main">
      <h1>Enter your task here ...</h1>
    </div>
  );
}

function Main() {
  return (
    <div id="main__content" className="main">
      <ul id="to-do-list">
        <Item content="Clean up bedroom"/>
        <Item content="Buy some milk"/>
        <Item content="Jogging"/>
        <Item content="Learn React"/>
        <Item content="Doing Exercises"/>
      </ul>
    </div>
  );
}

function Item(props) {
  return (
    <li className="to-do-item"> {props.content} </li>
  )
}

function Footer() {
  return (
    <div id="footer" className="main">
      <span> 5 tasks left! </span>
      <span> MindX todolist</span>
    </div>
  )
}

export default App;

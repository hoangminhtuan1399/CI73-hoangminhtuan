import './App.css';
import Home from './Home';
import UserData from './UserData';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([]);
  const callbackUserList = (newUserList) => {
      setUserList(newUserList);
  };
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home userList={userList} callbackUserList={callbackUserList} />}>
          <Route path=':userId' element={<UserData userList={userList} />} />
        </Route>
        <Route path='*' element={<h1>Error 404: Nothing here</h1>} />
      </Routes>
    </div>
  );
}

export default App;

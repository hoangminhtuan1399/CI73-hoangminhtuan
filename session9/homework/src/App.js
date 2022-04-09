import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import UserContext from './Context/UserContext';
import LanguageContext from './Context/LanguageContext';
import { useContext, useState } from 'react';
import LanguageStorage from './Context/LanguageStorage';

function App() {
  const LanguageStore = useContext(LanguageStorage);
  const [username, setUsername] = useState('');
  const [isLogIn, setIsLogIn] = useState(false);
  const [language, setLanguage] = useState({...LanguageStore.vi})
  return (
    <LanguageContext.Provider value={
      {
        language: language,
        setLanguage: setLanguage,
      }
    }>
      <UserContext.Provider value={{username: username, setUsername: setUsername, isLogIn: isLogIn, setIsLogIn: setIsLogIn}}>
        <div className="App">
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </UserContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;

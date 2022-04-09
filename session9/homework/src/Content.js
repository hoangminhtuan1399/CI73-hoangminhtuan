import LogIn from './LogIn'
import UserContext from './Context/UserContext';
import { useContext } from 'react';
import LanguageContext from './Context/LanguageContext';

const Content = () => {
    const welcomeStyle = {
        fontSize: '5rem',
        color: 'royalblue',
    }
    const LanguageData = useContext(LanguageContext);
    const UserData = useContext(UserContext);
    return (
        <div id="content">
            {UserData.isLogIn ? 
            <div style={welcomeStyle}>{LanguageData.language.welcomeText} {UserData.username}</div> : 
            <LogIn /> }
        </div>
    )
}

export default Content;
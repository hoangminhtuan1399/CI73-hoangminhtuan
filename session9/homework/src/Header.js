import UserContext from "./Context/UserContext";
import LanguageContext from "./Context/LanguageContext";
import { useContext } from "react";
const Header = () => {
    const UserData = useContext(UserContext);
    const LanguageData = useContext(LanguageContext);
    const handleLogOut = () => {
        UserData.setIsLogIn(false);
    }
    return (
        <div id="header">
            <span>MindX</span>
            {UserData.isLogIn ? 
            <div>
                <span style={{color: '#805fda'}}>{LanguageData.language.welcomeText} {UserData.username} </span>
                <span style={{color: 'red', marginLeft: '1.5rem', cursor: 'pointer'}} onClick={handleLogOut}> {LanguageData.language.logOutText}</span>   
            </div> :           
            <span style={{color: '#805fda'}}>{LanguageData.language.logInText}</span>
            }            
        </div>
    )
}

export default Header;
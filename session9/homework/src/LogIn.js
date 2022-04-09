import UserContext from "./Context/UserContext";
import { useContext, useState } from "react";
import LanguageContext from "./Context/LanguageContext";

const LogIn = () => {
    const LanguageData = useContext(LanguageContext);
    const UserData = useContext(UserContext);
    const [formValue, setFormValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        UserData.setUsername(e.target[0].value);
        UserData.setIsLogIn(true);
        setFormValue('');
    }

    const handleChange = (e) => {
        setFormValue(e.target.value);
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <div className='login__label center'>
                    {LanguageData.language.logInText}
                </div>
                <div className='login__input'>
                    <input value={formValue} onChange={handleChange} className='center' type="text" placeholder="Username..." required/>
                    <button type='submit' className='center'>{LanguageData.language.logInText}</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;
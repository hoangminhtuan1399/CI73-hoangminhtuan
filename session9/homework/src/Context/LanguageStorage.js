import { createContext } from "react";

function language(welcomeText, logInText, logOutText) {
    this.welcomeText = welcomeText;
    this.logInText = logInText;
    this.logOutText = logOutText;
}

const LanguageStorage = createContext({
    vi: new language('Chào mừng', 'Đăng nhập', 'Đăng xuất'),
    eng: new language('Welcome', 'Log In', 'Log Out'),
})

export default LanguageStorage;
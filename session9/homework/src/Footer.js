import { useContext } from "react";
import LanguageContext from "./Context/LanguageContext";
import LanguageStorage from "./Context/LanguageStorage";

const Footer = () => {
    const LanguageStore = useContext(LanguageStorage);
    const LanguageData = useContext(LanguageContext);
    const handleChange = (e) => {
        switch (e.target.value) {
            case 'Vi':
                LanguageData.setLanguage({...LanguageStore.vi});
                break;
            case 'Eng':
                LanguageData.setLanguage({...LanguageStore.eng});
                break;
        }
    }
    // console.log(LanguageData);
            return (
        <div id="footer" className="center">
            <select onChange={handleChange}>
                <option>Vi</option>
                <option>Eng</option>
            </select>
        </div>
    )
}

export default Footer;
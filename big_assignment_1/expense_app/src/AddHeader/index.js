import './style.css';
import { InputContainer } from '../InputContainer';

export const AddHeader = ({handleOpenInput}) => {
    return (
        <div id="header__add">
                <InputContainer handleOpenInput={handleOpenInput} />
        </div>
    )
}